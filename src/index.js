import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes/Routes';
import { AuthContextProvider } from './components/authcontext/AuthContext.js';
import axiosInstance from './services/axios';
import axios from 'axios';

axiosInstance.defaults.withCredentials = true
axios.defaults.withCredentials = true

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
  </React.StrictMode>, 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
