import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { RouterProvider } from 'react-router-dom';
import CustomRouter from './routers/Route';
import AuthProvider from './contects/AuthProvider';


ReactDOM.render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={CustomRouter} />
        </AuthProvider>
    </React.StrictMode>
    ,
    document.getElementById("root"))
