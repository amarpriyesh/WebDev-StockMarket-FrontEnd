import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Mongoose} from "mongoose";
import {GoogleLogin,GoogleOAuthProvider,useGoogleLogin} from  '@react-oauth/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'font-awesome/css/font-awesome.min.css';
import {useState} from "react";

const root = ReactDOM.createRoot(document.getElementById('root'));
//Mongoose.connect('mongodb+srv://finalproject:'+process.env.TUITER_PASSWORD+'@final-project.orngt.mongodb.net/tuiter?retryWrites=true&w=majority');


root.render(
    <React.StrictMode>
        <>
            <GoogleOAuthProvider clientId="48989110748-md5pmjb021g6gh28t3oo40qev4ahdto2.apps.googleusercontent.com">

        <App />
            </GoogleOAuthProvider>
        </>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();