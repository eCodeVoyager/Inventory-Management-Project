import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

const Navbar = ({ page }) => {
  const location = useLocation();
  const pathName = location.pathname;

  // Map paths to page names
  const pageNames = {
    '/': 'Home',
    '/about': 'About Us',
    '/collection': 'Our Collection',
    '/contact': 'Contact Us',
    '/login': 'Login',
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', backgroundColor: '#C38D9E' }}>
      <div>
      <h2 className='text-white' style={{ color: 'white', marginLeft: '80px' }}>{page}</h2>
      </div>
      
      <div style={{ display: 'flex', gap: '20px', fontSize: '20px' }}>
        <Link to="/home" style={{ color: 'white' }}>Home</Link>
        <Link to="/about-us" style={{ color: 'white' }}>About Us</Link>
        <Link to="/our-collection" style={{ color: 'white' }}>Our Collection</Link>
        <Link to="/contact-us" style={{ color: 'white' }}>Contact Us</Link>
        <Link to="/login" style={{ color: 'white' }}>Login</Link>
        <ShoppingCartIcon className="h-6 w-6 text-white" />
      </div>
    </nav>
  );
};

export default Navbar;