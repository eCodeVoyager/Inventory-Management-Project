import React from 'react';
import { UserIcon, EnvelopeIcon, PhoneIcon, MapPinIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const Settings = () => {
  return (
    <div className="min-h-screen bg-[#E6F0DC] flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-5xl">
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-bold">Account Settings</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
            Update
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="mb-4">
              <label className="block text-gray-700">First Name</label>
              <div className="relative">
                <UserIcon className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                <input 
                  type="text" 
                  className="w-full border-2 border-black rounded py-2 pl-10 pr-3" 
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Last Name</label>
              <div className="relative">
                <UserIcon className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                <input 
                  type="text" 
                  className="w-full border-2 border-black rounded py-2 pl-10 pr-3" 
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <div className="relative">
                <EnvelopeIcon className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                <input 
                  type="email" 
                  className="w-full border-2 border-black rounded py-2 pl-10 pr-3" 
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone No</label>
              <div className="relative">
                <PhoneIcon className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                <input 
                  type="text" 
                  className="w-full border-2 border-black rounded py-2 pl-10 pr-3" 
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Address</label>
              <div className="relative">
                <MapPinIcon className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                <input 
                  type="text" 
                  className="w-full border-2 border-black rounded py-2 pl-10 pr-3" 
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <div className="relative">
                <EyeSlashIcon className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                <input 
                  type="password" 
                  className="w-full border-2 border-black rounded py-2 pl-10 pr-3" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
