import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./pages/Home";
import AboutUs from "./pages/About Us"; 
import OurCollection from "./pages/Our Collection"; 
import ContactUs from "./pages/Contact Us"; 
import Navbar from "./components/NavBar"; 
import Sidebar from "./components/Sidebar";
import Orders from "./pages/Orders";
import NavBarDash from "./components/NavBarDash";
import Inventory from "./pages/Inventory";
import Customers from "./pages/Customers";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import RawMaterials from "./pages/RawMaterials";
import AddProduct from "./pages/AddProduct";
import AddRawMaterial from "./pages/AddRawMaterial";
import CreateNewOrder from "./pages/CreateNewOrder";
import AddNewCustomer from "./pages/AddNewCustomer";
import AddCart from "./pages/AddCart";
import SubCategory from "./subCategories/SubCategory";
import ProfilePage from "./pages/ProfilePage";
import Supplier from "./pages/Supplier";
import AddNewSupplier from "./pages/AddNewSupplier";

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SubProducts from "./subCategories/SubProducts";


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
        <Route path="/navbardash" element={<NavBarDash />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/rawmaterials" element={<RawMaterials />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/addrawmaterial" element={<AddRawMaterial />} />
        <Route path="/createneworder" element={<CreateNewOrder />} />
        <Route path="/addnewcustomer" element={<AddNewCustomer />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/addcart" element={<AddCart />} />
        <Route path="/supplier" element={<Supplier />} />
        <Route path="/addnewsupplier" element={<AddNewSupplier />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/subcategory/:id" element={<SubCategory/>} />
        <Route path="/products/:id" element={<SubProducts/>} />
      </Routes>
    </Router>
  );
}

export default App;