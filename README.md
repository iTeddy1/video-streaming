# Video Streaming System Owncast on Google Cloud

## Overview

This project is a video streaming application built entirely with open-source technologies, designed to meet real user requirements. The application allows streamers to broadcast live video directly from their laptop webcam or phone camera to a limited number of viewers. It also supports video quality adaptation based on viewer network bandwidth.

## Project Information

- **Course:** Multimedia Communication Technology  
- **Instructor:** Dr. Nguyễn Tấn Hoàng Phước  
- **Class:** NT536.P11  
- **Team:** Group 9  
- **Team Members:**  
  - Nguyễn Duy Trung (ID: 22521565)  
  - Phùng Lê Toàn Nhân (ID: 22521006)  
  - Nguyễn Hữu Nam Trường (ID: 22521579)  
  - Phạm Quang Nhật (ID: 22521024)

## Project Description

The project focuses on building and deploying a video streaming server and application modeled on Owncast, hosted on Google Cloud services. It addresses challenges in server setup and live streaming application architecture. Key features include:  
- Live streaming via webcam or phone camera.  
- Adaptive video quality based on viewer bandwidth.  
- Scalable hosting using Google Cloud.  
- 100% open-source code.

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

