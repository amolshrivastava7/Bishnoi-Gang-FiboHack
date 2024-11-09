# Fibo Try 1 Main

![Project Logo](https://example.com/project-logo.png) <!-- Replace with actual logo URL if available -->

**Fibo Try 1 Main** is a web-based safety alert system designed to provide real-time emergency alerts and response tracking, especially focused on women's safety. The application includes dashboards for both users and guardians, allowing for quick access to location information and other alert functionalities. This project is part of the "Bishnoi Gang" team initiative.

![Demo Animation](https://example.com/demo-animation.gif) <!-- Replace with an actual GIF URL if available -->

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Tech Stack](#tech-stack)
- [Dependencies](#dependencies)

## Features

- **Real-Time Safety Alerts**: Users can send alerts with location and video.
- **Dashboard Views**: Separate dashboards for users and guardians to monitor and respond to alerts.
- **Automated WhatsApp Messages**: Sends an alert message from the user's number to designated contacts.
- **Location-Based Assistance**: Shows nearest police stations and hospitals upon alert activation.

## Project Structure

```plaintext
fibo_try_1-main/
├── .env                     # Environment variables for sensitive data
├── README.md                # Documentation for the project
├── package.json             # Project dependencies and scripts
├── package-lock.json        # Detailed dependency tree
├── server.js                # Main server file (Node.js, Express)
└── public/                  # Public HTML pages
    ├── about_guardian.html  # Guardian information page
    ├── about_user.html      # User information page
    ├── guardian_dashboard.html  # Guardian dashboard
    ├── index.html           # Main landing page
    └── user_dashboard.html  # User dashboard

Installation
Clone the Repository:

bash
Copy code
git clone https://github.com/whotookthisusername25/fibo
cd fibo_try_1-main
Install Dependencies: Ensure you have Node.js installed, then install the project dependencies:

bash
Copy code
npm install
Set Up Environment Variables: Create a .env file in the root directory with the necessary configurations (see below).

Environment Variables
The .env file should include the following:

plaintext
Copy code
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
FIREBASE_APP_ID=your_firebase_app_id
WHATSAPP_API_KEY=your_whatsapp_api_key
Replace each your_* with your specific Firebase and WhatsApp configurations.

Usage
Start the Server:

bash
Copy code
npm start
The application will be available on http://localhost:3000.

Access Dashboards:

User Dashboard: /public/user_dashboard.html
Guardian Dashboard: /public/guardian_dashboard.html
Sending an Alert:

Open the User Dashboard.
Click the alert button to start video recording, capture location data, and send the alert to designated contacts.
Tech Stack

Dependencies
The project includes the following main dependencies:

Express: Server framework for Node.js.
Firebase: Real-time database and storage for video uploads.
Multer: Middleware for handling file uploads.
dotenv: For managing environment variables.
For a complete list of dependencies, refer to package.json.
