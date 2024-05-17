// import React from "react";
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./pages/Home";
import AboutUs from "./pages/About Us"; 
import OurCollection from "./pages/Our Collection"; 
import ContactUs from "./pages/Contact Us"; 
import Navbar from "./components/NavBar"; 
import Sidebar from "./components/Sidebar";


// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/about-us" element={<AboutUs />} /> 
//         <Route path="/our-collection" element={<OurCollection />} /> 
//         <Route path="/contact-us" element={<ContactUs />} /> 
//         <Route path="/sidebar" element={<Sidebar />} /> 
//          <Route path="*" element={<Navigate to="/login" />} /> 
//         <Route path="/navbar" element={<Navbar />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Home from "./pages/Home";
// import AboutUs from "./pages/AboutUs"; // removed space
// import OurCollection from "./pages/OurCollection"; // removed space
// import ContactUs from "./pages/ContactUs"; // removed space
// import Navbar from "./components/NavBar"; 
// import Sidebar from "./components/Sidebar";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";

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
        <Route path="/sidebar" element={<Sidebar />} /> 
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
}

export default App;