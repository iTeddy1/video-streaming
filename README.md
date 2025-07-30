# Video Streaming System Owncast on Google Cloud

## Overview

This project is a video streaming application built entirely with open-source technologies, designed to meet real user requirements. The application allows streamers to broadcast live video directly from their laptop webcam or phone camera to a limited number of viewers. It also supports video quality adaptation based on the viewer's network bandwidth.

---

## Project Information

- **Course:** Multimedia Communication Technology  
- **Instructor:**  Nguyễn Tấn Hoàng Phước  
- **Class:** NT53.P11  
- **Team:** Group 9  
- **Team Members:**  
  - Nguyễn Duy Trung (ID: 22521565)  
  - Phùng Lê Toàn Nhân (ID: 22521006)  
  - Nguyễn Hữu Nam Trường (ID: 22521579)  
  - Phạm Quang Nhật (ID: 22521024)

---

## Project Description

The project focuses on building and deploying a video streaming server and application modeled on Owncast, hosted on Google Cloud services. It addresses challenges in server setup and live streaming application architecture. Key features include:  
- Live streaming via webcam or phone camera.  
- Adaptive video quality based on viewer bandwidth.  
- Scalable hosting using Google Cloud.  
- 100% open-source code.

---

## Technology Stack and Implementation

This video streaming project integrates several modern technologies to deliver a scalable, open-source, and adaptive live streaming application. Below is an overview of the key technologies and their roles:

### Backend Server and API

- **Node.js and Express:**  
  The backend server is built using Node.js with the Express framework. This combination allows for efficient handling of HTTP requests, RESTful APIs, and real-time event processing with good scalability.

- **MongoDB:**  
  A NoSQL database is used to store user information and application-related data. MongoDB provides flexible schema design and robust querying capabilities ideal for the project's needs.

- **OBS WebSocket (obs-websocket-js):**  
  Integration with OBS Studio is achieved using the OBS WebSocket protocol. Through this, the server remotely controls the streaming software to dynamically update streaming inputs (for example, adjusting video titles or overlays) in response to user chat actions such as gifts or donations.

- **Ngrok:**  
  Ngrok is used to create a secure tunnel from the public internet to the locally running OBS WebSocket server, enabling remote interaction between the backend and OBS during development or deployment without exposing the local machine directly.

- **Sepay (Donation Payment Gateway):**  
  Sepay is integrated as the payment gateway service specifically to handle donations within the streaming platform. It securely manages transaction processing, allowing viewers to donate through a streamlined and trustworthy payment experience. The backend listens for donation events triggered via Sepay APIs to react (e.g., updating overlays or logs).

### Frontend and Video Streaming

- **Owncast:**  
  The streaming front-end and server are based on Owncast, an open-source live streaming and chat server. It manages ingesting video streams from webcams or mobile cameras and broadcasting to connected viewers efficiently.

- **Adaptive Streaming:**  
  The application uses adaptive bitrate streaming to provide optimal video quality based on the viewer's network conditions, minimizing buffering and ensuring smooth playback.

### Deployment and Cloud Services

- **Google Cloud Platform (GCP):**  
  The backend server and Owncast services are deployed on Google Cloud, providing scalability, reliability, and global availability with cloud-managed infrastructure.

- **Environment Configuration:**  
  Sensitive configurations such as database URLs and OBS WebSocket passwords are managed securely using environment variables (.env files), ensuring security and ease of configuration in different environments.

### Summary of Workflow

1. **Live Streaming:**  
   The streamer starts the broadcast using Owncast, which ingests video from their webcam or phone camera.

2. **Backend Control:**  
   The backend server listens for chat commands (like `/gift` or `/donate`) via Owncast chat events.

3. **Donation Handling:**  
   Donation events are processed via Sepay’s payment gateway integration, triggering appropriate backend responses and OBS overlay updates.

4. **OBS Integration:**  
   Upon receiving commands or donation confirmations, the server communicates with OBS through the WebSocket to update stream overlays or titles dynamically.

5. **Viewer Experience:**  
   Viewers access the live stream and experience adaptive quality based on their internet bandwidth, ensuring smooth playback.

---


## How to Use

- To start streaming, press the **StartStreaming** button in the app interface.  
- View the live stream using the link:  
  `http://35.241.111.185:8080`

---

## Backend Server Code Notes

The backend server is built with Node.js and Express, connecting to MongoDB for user data management and OBS WebSocket API for controlling streaming inputs.


**Notes:**

- MongoDB connection string should be set in `.env` file with key `DB_URL`.
- `OBSWebSocket` is connected through a ngrok tunnel URL to control OBS remotely.
- The `/gift` and `/donate` POST endpoints process chat commands from Owncast to trigger actions in the streaming software.
- The root GET endpoint lists all users stored in the database for debugging or monitoring.
- Make sure to replace `'https://your-ngrok-url'` and `'your_password'` with actual values.

