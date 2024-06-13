import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import NavBarDash from '../components/NavBarDash';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Swal from 'sweetalert2';

const Customer = () => {
  const [customer, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  

  useEffect(() => {
    fetchCustomer();
  }, []);

  const fetchCustomer = async () => {
    try {
      console.log('Fetching customers from database...');
      const response = await fetch('/api/customer');
      const data = await response.json();
      setCustomers(data);
      console.log('Customers fetched from database:', data); // Log the customers to the console
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  };

  const handleRowClick = (customer) => {
    console.log('Customer selected:', customer);
    setSelectedCustomer(customer);
  };

  const handleDelete = async () => {
    if (selectedCustomer) {
      const confirm = await Swal.fire({
        title: 'Are you sure?',
        text: `Delete Customer ${selectedCustomer.customerId}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
      });

      if (confirm.isConfirmed) {
        try {
          console.log('Deleting customer with ID:', selectedCustomer.customerId);
          await fetch(`/api/customer/${selectedCustomer.id}`, {
            method: 'DELETE',
          });
          Swal.fire('Deleted!', 'Customer has been deleted.', 'success');
          console.log('Customer deleted:', selectedCustomer);
          fetchCustomer();
          setSelectedCustomer(null);
        } catch (error) {
          console.error('Error deleting customer:', error);
          Swal.fire('Error', 'Error deleting customer', 'error');
        }
      }
    }
  };

  const filteredCustomers = customer.filter((customer) =>
    customer.Customer_Name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-rows-[auto,1fr] h-screen">
      <div>
        <NavBarDash page="Customers" />
      </div>
      <div className="grid grid-cols-8">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-7 container mx-auto p-4" style={{ backgroundColor: '#E6F0DC' }}>
          <div className="flex justify-between mb-4">
            <h2 className="text-lg font-bold">Customer Summary</h2>
            <Link to="/addnewcustomer">
              <button className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
                Add New Customer
              </button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mb-4">
            <div className="bg-white shadow-lg rounded-lg p-4" style={{ width: '500px' }}>
              <h2 className="text-lg font-bold mb-2">Customers</h2>
              <div className="flex flex-col">
                <div className="flex justify-between mb-1">
                  <p>{filteredCustomers.length}</p>
                </div>
                <div className="flex justify-between text-gray-600 text-sm">
                  <p>All Customers</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between mb-4">
            <div className="relative w-48">
              <input 
                type="text" 
                placeholder="Search Customers" 
                className="border rounded py-2 pl-10 pr-4 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
            </div>
            <button 
              onClick={handleDelete}
              disabled={!selectedCustomer}
              className={`bg-red-500 text-white px-4 py-2 rounded shadow ${!selectedCustomer ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'}`}
            >
              Delete
            </button>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-4">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Customer ID</th>
                  <th className="py-2 px-4 border-b">Customer Name</th>
                  <th className="py-2 px-4 border-b">Email</th>
                  <th className="py-2 px-4 border-b">Phone No</th>
                  <th className="py-2 px-4 border-b">Total Orders</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {filteredCustomers.map((customer) => (
                  <tr 
                    key={customer.id}
                    className={`cursor-pointer ${selectedCustomer && selectedCustomer.id === customer.id ? 'bg-gray-200' : ''}`}
                    onClick={() => handleRowClick(customer)}
                  >
                    <td className="py-2 px-4 border-b">{customer.Customer_ID}</td>
                    <td className="py-2 px-4 border-b">{customer.Customer_Name}</td>
                    <td className="py-2 px-4 border-b">{customer.Email}</td>
                    <td className="py-2 px-4 border-b">{customer.Phone_No}</td>
                    <td className="py-2 px-4 border-b">{customer.totalOrders}</td>
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
