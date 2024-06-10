import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const Navbar = ({ page }) => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', backgroundColor: '#006769' }}>
      <div>
        <h2 className='text-white' style={{ color: 'white', marginLeft: '80px' }}>{page}</h2>
      </div>
      
      <div style={{ display: 'flex', gap: '20px', fontSize: '20px' }}>
        <Link to="/home" style={{ color: 'white' }}>Home</Link>
        <Link to="/about-us" style={{ color: 'white' }}>About Us</Link>
        <Link to="/our-collection" style={{ color: 'white' }}>Our Collection</Link>
        <Link to="/contact-us" style={{ color: 'white' }}>Contact Us</Link>
        {/* <Link to="/login" style={{ color: 'white' }}>Login</Link> */}
        <Link to="/addcart"><ShoppingCartIcon className="h-6 w-6 text-white" /></Link>
          
        
      </div>
    </nav>
  );
};

export default Navbar;
