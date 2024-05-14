import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./pages/Home";
import AboutUs from "./pages/About Us"; 
import OurCollection from "./pages/Our Collection"; 
import ContactUs from "./pages/Contact Us"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} /> 
        <Route path="/our-collection" element={<OurCollection />} /> 
        <Route path="/contact-us" element={<ContactUs />} /> 
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;