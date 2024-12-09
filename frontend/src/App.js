import React from "react";
import Navbar from "./components/Navbar";
// import Home from "./home/Home";
import {Outlet } from "react-router-dom";
// import CustomRouter from "./routers/Route";
import './App.css';
import MyFooter from "./components/MyFooter";


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="min-h-screen">

      <Outlet />
      </div>
      <MyFooter />
    </div>
    

  );
};

export default App;
