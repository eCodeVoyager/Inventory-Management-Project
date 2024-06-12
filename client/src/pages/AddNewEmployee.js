import React, { useState } from 'react';

const AddEmployeePage = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [image, setImage] = useState(null);
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to submit new employee data
    console.log('New Employee submitted:', { employeeId, employeeName, email, address, phone, image, password });
    // Reset form fields after submission
    setEmployeeId('');
    setEmployeeName('');
    setEmail('');
    setAddress('');
    setPhone('');
    setImage(null);
    setPassword('');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#E6F0DC]">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Add New Employee</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="employeeId" className="block mb-1">Employee ID</label>
            <input type="text" id="employeeId" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="employeeName" className="block mb-1">Employee Name</label>
            <input type="text" id="employeeName" value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block mb-1">Address</label>
            <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-1">Phone No</label>
            <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block mb-1">Image</label>
            <input type="file" id="image" onChange={(e) => setImage(e.target.files[0])} className="w-full border border-gray-300 rounded-md px-3 py-2" />
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

export default AddEmployeePage;
