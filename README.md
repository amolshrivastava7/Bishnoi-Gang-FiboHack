# Fibo Try 1 Main

**Fibo Try 1 Main** is a web-based safety alert system designed to provide real-time emergency alerts and response tracking, especially focused on women's safety. The application includes dashboards for both users and guardians, allowing for quick access to location information and other alert functionalities. This project is part of the "Bishnoi Gang" team initiative.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
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
