import React from 'react';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom'; 
import NavBarDash from '../components/NavBarDash';  // Import the NavBarDash component

const Customer = () => {
  const customers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', active: true, new: true },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '234-567-8901', active: true, new: false },
    { id: 3, name: 'Sam Wilson', email: 'sam@example.com', phone: '345-678-9012', active: false, new: false },
    // Add more customers as needed
  ];

  const totalCustomers = customers.length;
  const activeCustomers = customers.filter(customer => customer.active).length;
  const newCustomers = customers.filter(customer => customer.new).length;

  return (
    <div className="grid grid-rows-[auto,1fr] h-screen">
      {/* Add NavBarDash at the top */}
      <div>
        <NavBarDash page="Customers"/>
      </div>
      <div className="grid grid-cols-8">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-7 container mx-auto p-4">
          <div className="flex justify-between mb-4">
            <h2 className="text-lg font-bold">Customer Summary</h2>
            <Link to="/addnewcustomer">
            <button className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
              Add New Customer
            </button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mb-4">
            <div className="bg-white shadow-lg rounded-lg p-4">
              <h2 className="text-lg font-bold mb-2">Customers</h2>
              <div className="flex flex-col">
                <div className="flex justify-between mb-1">
                  <p>{totalCustomers}</p>
                  <p>{activeCustomers}</p>
                  <p>{newCustomers}</p>
                </div>
                <div className="flex justify-between text-gray-600 text-sm">
                  <p>All Customers</p>
                  <p>Active Customers</p>
                  <p>New Customers</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between mb-4">
            <input 
              type="text" 
              placeholder="Search Customers" 
              className="border rounded py-2 px-4 w-full"
            />
          </div>

          <div className="bg-white shadow-lg rounded-lg p-4">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Customer ID</th>
                  <th className="py-2 px-4 border-b">Customer Name</th>
                  <th className="py-2 px-4 border-b">Email</th>
                  <th className="py-2 px-4 border-b">Phone No</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {customers.map((customer) => (
                  <tr key={customer.id}>
                    <td className="py-2 px-4 border-b">{customer.id}</td>
                    <td className="py-2 px-4 border-b">{customer.name}</td>
                    <td className="py-2 px-4 border-b">{customer.email}</td>
                    <td className="py-2 px-4 border-b">{customer.phone}</td>
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

export default Customer;
