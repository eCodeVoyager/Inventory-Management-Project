import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  BuildingStorefrontIcon,
  ArrowRightOnRectangleIcon,
  Squares2X2Icon,
  ArchiveBoxIcon,
  BuildingLibraryIcon,
  UsersIcon,
  UserPlusIcon
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

  const [activeBar, setActiveBar] = useState('dashboard');
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname.split('/')[1];
    setActiveBar(currentPath);
  }, [location]);

  return (
    <div>
      <div className="fixed top-0 left-0 w-[200px] border-2 border-l-gray-400 bg-blue-900 h-screen">
        <div className="font-inter text-white p-4 mb-8">
          <p className="flex font-bold text-xl justify-center">GLEAM CERAMIC </p>
          <p className="flex font-bold text-xl justify-center">COMPLEX</p>
        </div>

        <div className="font-inter text-white">
          <Link to='/dashboard'>
            <div className={`flex pl-7 gap-1 hover:text-white hover:bg-[#99cc66] rounded-lg p-2 cursor-pointer 
            ${activeBar === 'dashboard' ? 'text-white bg-[#02824f]' : ''}`} 
            onClick={() => setActiveBar('dashboard')}>
              <Squares2X2Icon className='h-6 w-6'/>
              <p className='flex items-center'>Dashboard</p>
            </div>
          </Link>

          <Link to='/orders'>
            <div className={`flex pl-7 gap-1 hover:text-white hover:bg-[#99cc66] rounded-lg p-2 cursor-pointer 
            ${activeBar === 'orders' ? 'text-white bg-[#02824f]' : ''}`} 
            onClick={() => setActiveBar('orders')}>
              <ArchiveBoxIcon className='h-6 w-6'/>
              <p className='flex items-center'>Orders</p>
            </div>
          </Link>

          <Link to='/inventory'>
            <div className={`flex pl-7 gap-1 hover:text-white hover:bg-[#99cc66] rounded-lg p-2 cursor-pointer 
            ${activeBar === 'inventory' ? 'text-white bg-[#02824f]' : ''}`} 
            onClick={() => setActiveBar('inventory')}>
              <BuildingLibraryIcon className='h-6 w-6'/>
              <p className='flex items-center'>Products</p>
            </div>
          </Link>

          <Link to='/rawmaterials'>
            <div className={`flex pl-7 gap-1 hover:text-white hover:bg-[#99cc66] rounded-lg p-2 cursor-pointer 
            ${activeBar === 'rawmaterials' ? 'text-white bg-[#02824f]' : ''}`} 
            onClick={() => setActiveBar('rawmaterials')}>
              <BuildingStorefrontIcon className='h-6 w-6'/>
              <p className='flex items-center'>Raw Materials</p>
            </div>
          </Link>

          <Link to='/customers'>
            <div className={`flex pl-7 gap-1 hover:text-white hover:bg-[#99cc66] rounded-lg p-2 cursor-pointer 
            ${activeBar === 'customers' ? 'text-white bg-[#02824f]' : ''}`} 
            onClick={() => setActiveBar('customers')}>
              <UsersIcon className='h-6 w-6'/>
              <p className='flex items-center'>Customers</p>
            </div>
          </Link>

          <Link to='/supplier'>
            <div className={`flex pl-7 gap-1 hover:text-white hover:bg-[#99cc66] rounded-lg p-2 cursor-pointer 
            ${activeBar === 'supplier' ? 'text-white bg-[#02824f]' : ''}`} 
            onClick={() => setActiveBar('supplier')}>
              <UserPlusIcon className='h-6 w-6'/>
              <p className='flex items-center'>Supplier</p>
            </div>
          </Link>

          <Link to='/employees'>
            <div className={`flex pl-7 gap-1 hover:text-white hover:bg-[#99cc66] rounded-lg p-2 cursor-pointer 
            ${activeBar === 'employees' ? 'text-white bg-[#02824f]' : ''}`} 
            onClick={() => setActiveBar('employees')}>
              <UsersIcon className='h-6 w-6'/> 
              <p className='flex items-center'>Employees</p>
            </div>
          </Link>
        </div>
            

        <div className="font-inter text-white w-[180px]">
          <Link to='/login'>
            <div className='fixed flex pl-7 w-[180px] gap-1 hover:text-white hover:bg-[#99cc66] rounded-lg p-2 cursor-pointer bottom-10'>
              <ArrowRightOnRectangleIcon className='h-6 w-6'/>
              <p>Log out</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
