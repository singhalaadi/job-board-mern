import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App.jsx'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ToastContainer position='top-center' />
  </React.StrictMode>
);
// import axios from 'axios'

// const request= await axios.get('/api/v1/test');
// console.log(request.data);

