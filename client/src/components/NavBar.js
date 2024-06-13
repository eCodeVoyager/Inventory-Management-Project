import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCartIcon, UsersIcon } from '@heroicons/react/24/outline';

const Navbar = ({ page }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const Navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here
    Navigate.push('/login');
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', backgroundColor: '#006769' }}>
      <div>
        <h1 className='text-white' style={{ color: 'white', marginLeft: '80px', fontSize: '20px' }}>{page}</h1>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '30px', fontSize: '20px' }}>
        <Link to="/home" style={{ color: 'white' }}>Home</Link>
        <Link to="/aboutus" style={{ color: 'white' }}>About Us</Link>
        <Link to="/ourcollection" style={{ color: 'white' }}>Our Collection</Link>
        <Link to="/contactus" style={{ color: 'white' }}>Contact Us</Link>
     </div>
      
      <div style={{ display: 'flex', gap: '40px', position: 'relative' }}>
        
        <div style={{ position: 'relative' }}>
          <UsersIcon className="h-6 w-6 text-white cursor-pointer" onClick={() => setDropdownVisible(!dropdownVisible)} />
          {dropdownVisible && (
            <div style={{ position: 'absolute', right: 0, backgroundColor: 'white', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
              <ul style={{ listStyle: 'none', margin: 0, padding: '10px', textAlign: 'left' }}>
                <li style={{ marginBottom: '10px' }}>
                  <Link to="/customerprofile" style={{ textDecoration: 'none', color: '#006769' }}>Profile</Link>
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <Link to="/myorders" style={{ textDecoration: 'none', color: '#006769' }}>My Orders</Link>
                </li>
                <li>
                  <button onClick={handleLogout} style={{ background: 'none', border: 'none', color: '#006769', cursor: 'pointer' }}>Sign Out</button>
                </li>
              </ul>
            </div>
          )}
        </div>
        <Link to="/addcart"><ShoppingCartIcon className="h-6 w-6 text-white" /></Link>
      </div>
    </nav>
  );
};

export default Navbar;
