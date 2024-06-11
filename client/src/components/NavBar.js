import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, UsersIcon } from '@heroicons/react/24/outline';

const Navbar = ({ page }) => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', backgroundColor: '#006769' }}>
      <div>
        <h1 className='text-white' style={{ color: 'white', marginLeft: '80px', fontSize: '20px' }}>{page}</h1>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '30px', fontSize: '20px' }}>
        <Link to="/home" style={{ color: 'white' }}>Home</Link>
        <Link to="/about-us" style={{ color: 'white' }}>About Us</Link>
        <Link to="/our-collection" style={{ color: 'white' }}>Our Collection</Link>
        <Link to="/contact-us" style={{ color: 'white' }}>Contact Us</Link>
     </div>
      <div style={{ display: 'flex', gap: '40px' }}>
        <Link to="/addcart"><UsersIcon className="h-6 w-6 text-white" /></Link>
        <Link to="/addcart"><ShoppingCartIcon className="h-6 w-6 text-white" /></Link>
      </div>

    </nav>
  );
};

export default Navbar;
