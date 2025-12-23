# Synchro
## Project Context 
In Fall 2025, I took CS320 Software Engineering at UMASS Amherst.
This repository contains my work for an app called Synchro. I completed the overall design, implementation, and testing of the project.

The following files and directories were contributed by my teamates:
- `frontend/src/auth/AuthProvider.tsx`
- `frontend/src/components/Shared/ErrorPopup`
- `backend/python`

All other code, documentation, and project structure were implemented by me.

## How to Launch the Site

1. Navigate to the `backend` directory and create a `.env` file:
   ```bash
   cd backend
   touch .env
2. Add the following environment variables to the .env file:
   ```bash
   MONGODB_CONNECTION=your_mongodb_connection_string
   ENCRYPTION_KEY=your_encryption_key
3. Return to the project root directory.
    ```bash
   cd ..
4. Start the application:
   ```bash
   npm run start

## Summary 
This project synchronizes events between Gradescope and Canvas.
The backend is built with JavaScript and MongoDB, while the frontend uses TypeScript, React, and Vanilla Extract.
In this project, I applied skills I developed during my previous internship, including reviewing colleagues' Git pull requests, organizing and abstracting both the front-end and backend, and maintaining consistent themes across the website.

Example screenshots from the website:
<p align="center">
  <img src=".github/LogInPage.png" alt="LogInPage" width="400"/>
  <img src=".github/HomePage.png" alt="HomePage" width="400"/>
</p>


## Notes
While additional improvements were planned, I focused on implementing the core functionality. Being the sole front-end contributor and balancing a full course load meant that some enhancements could not be completed by the deadline.
