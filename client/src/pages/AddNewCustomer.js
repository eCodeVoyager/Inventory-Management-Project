// pages/AddCustomerPage.js

import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AddCustomerPage = () => {
  const [Customer_Name, setCustomerName] = useState('');
  const [Address, setAddress] = useState('');
  const [Phone_No, setPhone] = useState('');
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!Customer_Name || !Address || !Phone_No || !Email || !password) {
      Swal.fire('All fields are required');
      return;
    }

try {
  const response = await fetch('http://localhost:8000/customers/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ Customer_Name, Address, Phone_No, Email, password }),
  });

  if (response.ok) {
    Swal.fire('Success', 'Customer added successfully', 'success');
    setCustomerName('');
    setAddress('');
    setPhone('');
    setEmail('');
    setPassword('');
  } else {
    throw new Error('Failed to add customer');
  }
} catch (error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.error('Error status:', error.response.status);
    console.error('Error data:', error.response.data);
  } else if (error.request) {
    // The request was made but no response was received
    console.error('No response received:', error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error('Error', error.message);
  }
  Swal.fire('Error', 'Error adding customer', 'error');
}
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#E6F0DC]">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Add New Customer</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="customerName" className="block mb-1">Customer Name</label>
            <input type="text" id="customerName" value={Customer_Name} onChange={(e) => setCustomerName(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block mb-1">Address</label>
            <input type="text" id="address" value={Address} onChange={(e) => setAddress(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-1">Phone No</label>
            <input type="text" id="phone" value={Phone_No} onChange={(e) => setPhone(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">Email</label>
            <input type="email" id="email" value={Email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCustomerPage;
