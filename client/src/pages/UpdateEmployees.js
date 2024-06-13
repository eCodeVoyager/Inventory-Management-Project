import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateEmployeePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const employee = location.state?.employee;

  const [employeeId, setEmployeeId] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    if (employee) {
      setEmployeeId(employee.id);
      setEmployeeName(employee.name);
      setEmail(employee.email);
      setPhone(employee.phone);
      setAddress(employee.address);
    }
  }, [employee]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to update employee data
    console.log('Employee updated:', { employeeId, employeeName, email, phone, address });
    // Show message
    Swal.fire("Employee updated successfully!");
    navigate('/employees');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#E6F0DC]">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Update Employee</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="employeeId" className="block mb-1">Employee ID</label>
            <input type="text" id="employeeId" value={employeeId} readOnly className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100" />
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
            <label htmlFor="phone" className="block mb-1">Phone No</label>
            <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block mb-1">Address</label>
            <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateEmployeePage;
