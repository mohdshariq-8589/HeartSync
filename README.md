# HashSync
Welcome to **HashSync**, a modern dating application built with the MERN stack (MongoDB, Express.js, React, Node.js). Inspired by Tinder, HashSync offers a seamless and engaging experience for users looking to connect with potential matches through an interactive and feature-rich platform.

Check it out here: https://heartsync-vr3i.onrender.com

## Table of Contents
- Features
- Prerequisites
- Installation
- Run the Application
- Contributing

## Features
- **Swipe-Based Matching**: Swipe right to like, left to pass, and get matched with users who like you back.
- **Real-time Chat & Reactions**: Instant messaging with matches, including emoji and GIF reactions.
- **User Authentication**: Secure authentication using JWT for login and registration.
- **Interactive UI**: Smooth swiping animations with Framer Motion for a polished experience.
- **Dark & Light Mode**: Toggle between themes for enhanced usability.
- **Live Status & Activity**: See when your matches are online or recently active.
- **Profile Boosting**: Users can boost their profile visibility for a limited time.

## Prerequisites
Ensure you have the following installed on your machine:
- **Node.js** (v14 or later)
- **MongoDB** (local or cloud instance)

## Installation
Clone the repository:
```sh
git clone https://github.com/your-username/hashsync.git
cd hashsync
```
Install dependencies for both client and server:
```sh
npm install
cd client
npm install
```

Create a `.env` file in the `api` directory and add the following:
```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

Create a `.env` file in the `client` directory and add the following:
```env
VITE_API_BASE_URL=your_api_base_url
```

## Run the Application
Start the backend server:
```sh
npm run dev
```

Start the frontend server:
```sh
cd client
npm run dev
```

Open your browser and navigate to [http://localhost:5173](http://localhost:5173).

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code adheres to the project's coding standards.

