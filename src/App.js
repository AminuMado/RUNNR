import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Preferences from "./components/Preferences/Preferences";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import { Landing } from "./components/Landing/Landing";
import { Marketplace } from "./components/Marketplace/Marketplace";
function App() {
  
  return (
    <div className="App">
      <div className="wrapper">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/preferences" element={<Preferences />} />
            <Route path="/marketplace" element={<Marketplace />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
