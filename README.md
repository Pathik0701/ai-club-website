# Task Round Web Team AIC

## 👤 Candidate Details
**Full Name:** Pathik Chauhan  
**Registration Number:** 24BCE11117  

---

## 🚀 AI Club Website – Full Stack Project

This project is a full-stack website developed as part of the **Task Round for the Web Team of the AI Club (AIC)**.  
The goal of this project is to design, develop, and connect a responsive frontend with a functional backend to manage users and events for a college AI club.

---

## 🧠 Project Overview

The website allows:
- Guests to view information about the AI Club and upcoming events
- Users to register and log in
- Logged-in users to register for events
- Backend to handle authentication and event data

The project is built with **HTML, CSS, JavaScript (Frontend)** and **Node.js + Express (Backend)**.

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3 (Responsive Design)
- JavaScript (Vanilla JS)
- Live Server (for development)

### Backend
- Node.js
- Express.js
- CORS
- Body-Parser
- In-memory data storage (can be upgraded to database later)

### Deployment
- Backend hosted on **Render**
- Frontend hosted via **GitHub Pages / Live Server**

---

## 📁 Project Structure

ai-club-website/
├── index.html           📄 Main landing page
├── login.html           📄 Login page
├── register.html        📄 Registration page
│
├── css/                 📁 Stylesheets
│   └── style.css        📄 Main CSS (responsive & design)
│
├── js/                  📁 JavaScript files
│   ├── login.js         📄 Handles login functionality
│   ├── register.js      📄 Handles user registration
│   ├── events.js        📄 Dynamically displays events
│   ├── logout.js        📄 Logout functionality
│   └── api.js           📄 Backend API helper
│
├── assets/              📁 Images & GIFs
│   ├── ai-bg.gif        📄 Animated AI background
│   └── club-photo.png   📄 Club hero image
│
├── backend/             📁 Node.js + Express backend
│   ├── server.js        📄 Main backend server
│   ├── package.json     📄 Backend dependencies
│   └── package-lock.json
│
├── package.json         📄 Root dependencies
├── package-lock.json
└── README.md            📄 Project documentation


---

## 🎨 Frontend Features

- Clean and modern UI
- Fully responsive (mobile, tablet, desktop)
- Animated AI-themed hero background
- Sections included:
  - Navbar (About, Events, Join Us, Contact)
  - Hero section with club description
  - About section
  - Events section with dynamic cards
  - Footer with club info and social links

---

## 🔐 Backend Features

- User Registration (`POST /register`)
- User Login (`POST /login`)
- Fetch Events (`GET /events`)
- Event Registration (`POST /register-event`)
- Token-based session handling (dummy token for now)
- CORS-enabled for frontend-backend communication

---

## 🔗 Frontend ↔ Backend Connection

The frontend communicates with the backend using **Fetch API**.


▶️ How to Run the Project Locally
1️⃣ Clone the Repository
git clone https://github.com/Pathik0701/ai-club-website.git
cd ai-club-website

2️⃣ Start the Backend
cd backend
npm install
node server.js


You should see:

✅ Server running on http://localhost:5000

3️⃣ Start the Frontend

Open index.html using Live Server

URL will look like:

http://127.0.0.1:5500/index.html

🌐 Live Deployment

Backend (Render):
https://ai-club-website.onrender.com

Frontend:
Hosted via GitHub Pages / Live Server

---

🎯 Learning Outcomes

Understood full-stack architecture

Learned frontend–backend integration

Implemented REST APIs

Gained experience with deployment

Improved debugging and problem-solving skills
