const express = require('express');
const multer = require('multer');
const path = require('path');
const dotenv = require('dotenv');
const http = require('http');
const { Server } = require('socket.io');
const admin = require('firebase-admin');
const { v4: uuidv4 } = require('uuid');

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server);

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  }),
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
});
const bucket = admin.storage().bucket();

app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/api/send-alert', (req, res) => {
  const { latitude, longitude } = req.body;

  io.emit('new-alert', { latitude, longitude, timestamp: new Date().toISOString() });

  res.json({ success: true, message: 'Alert sent successfully' });
});

app.post('/api/upload-recording', upload.single('file'), async (req, res) => {
  const file = req.file;

  if (!file) {
    return res.status(400).json({ success: false, message: 'No file uploaded' });
  }

  const fileName = `${uuidv4()}.webm`;
  const fileUpload = bucket.file(fileName);

  const blobStream = fileUpload.createWriteStream({
    metadata: {
      contentType: file.mimetype,
    },
  });

  blobStream.on('error', (err) => {
    console.error('Error uploading to Firebase:', err);
    res.status(500).json({ success: false, message: 'Failed to upload recording' });
  });

  blobStream.on('finish', async () => {
    const audioUrl = await fileUpload.getSignedUrl({
      action: 'read',
      expires: '03-01-2030',
    });

    io.emit('new-recording', audioUrl[0]);

    res.json({ success: true, message: 'Recording uploaded successfully', audioUrl: audioUrl[0] });
  });

  blobStream.end(file.buffer);
});

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('A client connected to the dashboard');

  socket.on('disconnect', () => {
    console.log('A client disconnected from the dashboard');
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
