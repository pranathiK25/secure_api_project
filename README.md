Secure Task Management API

A secure and scalable REST API built using Node.js, Express, MongoDB, JWT Authentication, and Role-Based Access Control (RBAC).

This project demonstrates backend architecture, authentication, authorization, protected routes, and a simple React frontend for interaction.

🚀 Features

User Registration & Login

JWT Authentication

Role-Based Access Control (Admin / User)

Secure Password Hashing (bcrypt)

Protected Routes Middleware

Task CRUD Operations

Admin-only Access Controls

React Frontend Integration

Environment Variable Configuration

Production-ready Folder Structure

🛠 Tech Stack

Backend:

Node.js

Express.js

MongoDB

Mongoose

JWT

bcryptjs

Frontend:

React.js

Axios

📁 Project Structure
SECUREAPI/
│
├── secureapi_backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── server.js
│
├── secureapi_frontend/
│   ├── src/
│   └── package.json
│
└── README.md
⚙️ Setup Instructions
1️⃣ Clone Repository
git clone <repo-url>
cd SECUREAPI
2️⃣ Backend Setup
cd secureapi_backend
npm install

Create .env file:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Run backend:

npm run dev
3️⃣ Frontend Setup
cd ../secureapi_frontend
npm install
npm start

Frontend runs on:

http://localhost:3000

Backend runs on:

http://localhost:5000
🔐 Authentication Flow

User registers

Password hashed with bcrypt

JWT token generated on login

Token sent in Authorization header

Middleware verifies token

Role middleware controls access

👩‍💻 Author

Pranathi Sai
Developed as a part of Backend Internship Application.
