import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./pages/Home";
import AboutUs from "./pages/About Us"; 
import OurCollection from "./pages/Our Collection"; 
import ContactUs from "./pages/Contact Us"; 
import Navbar from "./components/NavBar"; 
import Sidebar from "./components/Sidebar";


import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


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