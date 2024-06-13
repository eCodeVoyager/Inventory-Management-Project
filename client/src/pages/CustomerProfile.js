import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate('/customerprofilesetting');
  };

  return (
    <div className="min-h-screen bg-[#E6F0DC] flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
        <div className="flex">
          <div className="w-1/3 border-r p-4">
            <div className="flex flex-col items-center">
              <img 
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="rounded-full w-32 h-32 mb-4"
              />
              <h2 className="text-xl font-semibold">Dilhani Ekanayake</h2>
              <p className="text-gray-600">Administrator</p>
              <p className="text-gray-600">Gleam Ceramic Complex</p>
            </div>
          </div>
          <div className="w-2/3 p-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex">
                <div className="w-1/3 text-gray-600">Full Name</div>
                <div className="w-2/3 text-gray-900">Dilhani Ekanayake</div>
              </div>
              <div className="flex">
                <div className="w-1/3 text-gray-600">Email</div>
                <div className="w-2/3 text-gray-900">fip@jukmuh.al</div>
              </div>
              <div className="flex">
                <div className="w-1/3 text-gray-600">Mobile</div>
                <div className="w-2/3 text-gray-900">(320) 380-4539</div>
              </div>
              <div className="flex">
                <div className="w-1/3 text-gray-600">Address</div>
                <div className="w-2/3 text-gray-900">Bay Area, San Francisco, CA</div>
              </div>
              <div className="flex justify-end">
                <button 
                  onClick={handleEditClick}
                  className="bg-blue-500 text-white px-4 py-2 rounded">
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
