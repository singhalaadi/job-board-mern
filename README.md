# 🧑‍💼 Jobify – Personal Job Board Application Tracker

A full-stack job board application built with the **MERN** stack (MongoDB, Express, React, Node.js) and modern tooling.  
Easily manage job postings, applications, and user authentication with a clean, responsive UI.

---

## 🚀 Features

- 🔐 **Authentication**: Secure login/register with JWT
- 📝 **Job Management**: Create, update, delete, and filter job postings
- 📊 **Dashboard**: Visualize job stats and trends
- 👤 **User Profiles**: Update profile info 
- ⚡ **Modern UI**: Built with React, Vite, and Styled Components
- 🛡️ **Security**: Helmet, rate limiting, and input sanitization

---

## 📁 Project Structure

```
P2- JOB BOARD/
│
├── client/         # Frontend (React + Vite)
│   ├── public/
│   ├── src/
│   ├── ...etc.
│
└── server/         # Backend (Node.js + Express)
    ├── controllers/
    ├── models/
    ├── routes/
    ├── ...etc.
```

---

## 🛠️ Tech Stack

- **Frontend:** React 19, Vite, React Router, Styled Components, Day.js
- **Backend:** Node.js, Express, Mongoose, JWT, Multer, Cloudinary
- **Database:** MongoDB Atlas
- **Other:** ESLint, dotenv, Helmet, Morgan, Express Rate Limit

---

## ⚙️ Getting Started

### 1. Clone the repository

```sh
git clone https://github.com/singhalaadi/job-board-react.git
cd job-board-react
```

### 2. Install dependencies

```sh
cd server
npm run setup-project
```

### 3. Set up environment variables

Create a `.env` file in `/server` with:

```
PORT=5000
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret
JWT_LIFETIME=30d
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 4. Run the app (development)

```sh
cd server
npm run dev
```

- Backend: [http://localhost:5000](http://localhost:5000)
- Frontend: [http://localhost:5173](http://localhost:5173)

---

## 📦 Production Build

```sh
cd server
npm run setup-production-app
```

---

## 📝 License

This project is licensed under the ISC License.
Author: Aaditya Singhal

---

## 🙏 Acknowledgements

- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Cloudinary](https://cloudinary.com/)