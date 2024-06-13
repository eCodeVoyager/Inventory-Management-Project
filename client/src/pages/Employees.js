// Import necessary modules and dependencies
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import NavBarDash from '../components/NavBarDash';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Swal from 'sweetalert2';

const Employee = () => {
  // Sample data for demonstration
  const employees = [
    { id: 1, name: 'Employee One', email: 'employee1@example.com', phone: '111-222-3333', address: 'Address One', department: 'Department A', active: true, new: true },
    { id: 2, name: 'Employee Two', email: 'employee2@example.com', phone: '222-333-4444', address: 'Address Two', department: 'Department B', active: true, new: false },
    { id: 3, name: 'Employee Three', email: 'employee3@example.com', phone: '333-444-5555', address: 'Address Three', department: 'Department C', active: false, new: false },
    // Add more employees as needed
  ];

  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleRowClick = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleUpdate = () => {
    if (selectedEmployee) {
      navigate('/updateemployee', { state: { employee: selectedEmployee } });
    }
  };

  const handleDelete = () => {
    if (selectedEmployee) {
      // Show confirmation message before deletion
      if (window.confirm('Are you sure you want to delete this employee?')) {
        // Logic for deleting employee
        alert(`Deleting Employee ${selectedEmployee.id}`);
        // Show success message after deletion
        Swal.fire("SweetAlert2 is working!");
      }
    }
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-rows-[auto,1fr] h-screen">
      <div>
        <NavBarDash page="Employees" />
      </div>
      <div className="grid grid-cols-8">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-7 container mx-auto p-4" style={{ backgroundColor: '#E6F0DC' }}>
          <div className="flex justify-between mb-4">
            <h2 className="text-lg font-bold">Employee Summary</h2>
            <Link to="/addnewemployee">
              <button className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
                Add New Employee
              </button>
            </Link>
          </div>
          <div className="flex justify-between mt-4 mb-4">
            <div className="relative w-48">
              <input 
                type="text" 
                placeholder="Search Employees" 
                className="border rounded py-2 pl-10 pr-4 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
            </div>

            <div className="flex space-x-2">
              <button 
                onClick={handleUpdate}
                disabled={!selectedEmployee}
                className={`bg-yellow-500 text-white px-4 py-2 rounded shadow ${!selectedEmployee ? 'opacity-50 cursor-not-allowed' : 'hover:bg-yellow-700'}`}
              >
                Update
              </button>

              {/* Add some margin to separate the buttons */}
              <div className="ml-4">
                <button 
                  onClick={handleDelete}
                  disabled={!selectedEmployee}
                  className={`bg-red-500 text-white px-4 py-2 rounded shadow ${!selectedEmployee ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'}`}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Employee ID</th>
                  <th className="py-2 px-4 border-b">Name</th>
                  <th className="py-2 px-4 border-b">Email</th>
                  <th className="py-2 px-4 border-b">Phone No</th>
                  <th className="py-2 px-4 border-b">Address</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {filteredEmployees.map((employee) => (
                  <tr 
                    key={employee.id}
                    className={`cursor-pointer ${selectedEmployee && selectedEmployee.id === employee.id ? 'bg-gray-200' : ''}`}
                    onClick={() => handleRowClick(employee)}
                  >
                    <td className="py-2 px-4 border-b">{employee.id}</td>
                    <td className="py-2 px-4 border-b">{employee.name}</td>
                    <td className="py-2 px-4 border-b">{employee.email}</td>
                    <td className="py-2 px-4 border-b">{employee.phone}</td>
                    <td className="py-2 px-4 border-b">{employee.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
