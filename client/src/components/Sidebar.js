import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Cog8ToothIcon,
  ArrowRightStartOnRectangleIcon,
  Squares2X2Icon,
  ArchiveBoxIcon,
  BuildingLibraryIcon,
  UsersIcon,
} from '@heroicons/react/24/solid';


const Sidebar = () => {
  const [showSubset, setShowSubset] = useState(() => {
    const savedState = localStorage.getItem('showSubset');
    return savedState === 'true';
  });

  const toggleSubset = () => {
    setShowSubset((prev) => {
      const newState = !prev;
      localStorage.setItem('showSubset', newState); 
      return newState;
    });
  };

  const [activeBar, setActiveBar] = useState('booking');
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname.split('/')[2];
    setActiveBar(currentPath);
  }, [location]);

  return (
    
    <div>
      <div className="fixed top-0 left-0 w-[200px] border-2 border-l-gray-400 bg-[#41B3A3] h-screen">
        <div className="font-inter text-text-primary p-4 mb-8">
          <p className="flex font-bold text-xl justify-center">GLEAM CERAMIC </p>
          <p className="flex font-bold text-xl justify-center">COMPLEX</p>
        </div>
        

        <div className="font-inter text-text-primary">
          <Link to='/dashboard'>
            <div className={`flex pl-7 gap-1 hover:text-white hover:bg-blue-900 rounded-lg p-2 cursor-pointer 
            ${activeBar === 'booking' ? 'text-white bg-text-primary':''}`} 
            onClick={() => setActiveBar('booking')}>
              <Squares2X2Icon className='h-6 w-6'/>
              <p className='flex items-center'>Dashboard</p>
            </div>
          </Link>

          <Link to='/orders'>
            <div className={`flex pl-7 gap-1 hover:text-white hover:bg-blue-900 rounded-lg p-2 cursor-pointer 
            ${activeBar === 'orders' ? 'text-white bg-text-primary' : ''} 
            ${showSubset ? 'border border-gray-300 font-bold' : ''}`} 
            onClick={() => {
              setActiveBar('orders');
              toggleSubset();
            }}>
              <ArchiveBoxIcon className='h-6 w-6 '/>
              <p className='flex items-center font-normal'>Orders</p>
            </div>
          </Link>
          
          <Link to='/inventory'>
            <div className={`flex pl-7 gap-1 hover:text-white hover:bg-blue-900 rounded-lg p-2 cursor-pointer 
            ${activeBar === 'mechanics' ? 'text-white bg-text-primary':''}`} 
            onClick={() => setActiveBar('mechanics')}>
              <BuildingLibraryIcon className='h-6 w-6 '/>
              <p>Inventory</p>
            </div>
          </Link>

          <Link to='/rawmaterials'>
            <div className={`flex pl-7 gap-1 hover:text-white hover:bg-blue-900 rounded-lg p-2 cursor-pointer 
            ${activeBar === 'orders' ? 'text-white bg-text-primary' : ''} 
            ${showSubset ? 'border border-gray-300 font-bold' : ''}`} 
            onClick={() => {
              setActiveBar('orders');
              toggleSubset();
            }}>
              <BuildingLibraryIcon className='h-6 w-6 '/>
              <p className='flex items-center font-normal'>Raw Materials</p>
            </div>
          </Link>

          <Link to='/customers'>
            <div className={`flex pl-7 gap-1 hover:text-white hover:bg-blue-900 rounded-lg p-2 cursor-pointer 
            ${activeBar === 'stock' ? 'text-white bg-text-primary':''}`} 
            onClick={() => setActiveBar('stock')}>
              <UsersIcon className='h-6 w-6 '/>
              <p>Customers</p>
            </div>
          </Link>

          <Link to='/settings'>
            <div className={`flex pl-7 gap-1 hover:text-white hover:bg-blue-900 rounded-lg p-2 cursor-pointer 
            ${activeBar === 'setting' ? 'text-white bg-text-primary':''}`} 
            onClick={() => setActiveBar('setting')}>
              <Cog8ToothIcon className='h-6 w-6'/>
              <p className='flex items-center'>Settings</p>
            </div>
          </Link>
        </div>

        <div className="font-inter text-text-primary w-[180px]">
          <Link to='/'>
            <div className='fixed flex pl-7 w-[180px] gap-1 hover:text-white hover:bg-blue-900 rounded-lg p-2 cursor-pointer bottom-10'>
              <ArrowRightStartOnRectangleIcon className='h-6 w-6 '/>
              <p>Log out</p>                    
            </div>
          </Link>
        </div>
      </div>
    </div>
    
  );
};

export default Sidebar;