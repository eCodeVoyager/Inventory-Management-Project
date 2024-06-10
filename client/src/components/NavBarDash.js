import React from 'react';
import { Link } from 'react-router-dom';
import { UserCircleIcon } from '@heroicons/react/24/solid';

const Navbar = ({ page }) => {
  // const location = useLocation();
  // const pathName = location.pathname;

  return (
    <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
      <nav style={{ flex: '7', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', backgroundColor: '#006769' }}>
        <div className="ml-4">
          <h2 className='text-white font-bold'>{page}</h2>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/profile">
            <UserCircleIcon className="h-6 w-6 text-white mr-4" />
          </Link>
        </div>
      </nav>
      <div style={{ flex: '1' }}>
        {/* The remaining 1/8th of the page */}
      </div>
    </div>
  );
};

export default Navbar;