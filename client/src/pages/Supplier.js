import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import NavBarDash from '../components/NavBarDash';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Supplier = () => {
  const suppliers = [
    { id: 1, name: 'Supplier One', email: 'supplier1@example.com', phone: '111-222-3333', address: '123 Street', rawmaterial: 'Material A', active: true, new: true },
    { id: 2, name: 'Supplier Two', email: 'supplier2@example.com', phone: '222-333-4444', address: '456 Avenue', rawmaterial: 'Material B', active: true, new: false },
    { id: 3, name: 'Supplier Three', email: 'supplier3@example.com', phone: '333-444-5555', address: '789 Boulevard', rawmaterial: 'Material C', active: false, new: false },
    // Add more suppliers as needed
  ];

  const totalSuppliers = suppliers.length;
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const navigate = useNavigate();

  const handleRowClick = (supplier) => {
    setSelectedSupplier(supplier);
  };

  const handleUpdate = () => {
    if (selectedSupplier) {
      navigate('/updatesupplier', { state: { supplier: selectedSupplier } });
    }
  };

  const handleDelete = () => {
    if (selectedSupplier) {
      // Logic for deleting supplier
      alert(`Delete Supplier ${selectedSupplier.id}`);
    }
  };

  return (
    <div className="grid grid-rows-[auto,1fr] h-screen">
      <div>
        <NavBarDash page="Suppliers" />
      </div>
      <div className="grid grid-cols-8">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-7 container mx-auto p-4" style={{ backgroundColor: '#E6F0DC' }}>
          <div className="flex justify-between mb-4">
            <h2 className="text-lg font-bold">Supplier Summary</h2>
            <Link to="/addnewsupplier">
              <button className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
                Add New Supplier
              </button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mb-4">
            <div className="bg-white shadow-lg rounded-lg p-4" style={{ width: '500px' }}>
              <h2 className="text-lg font-bold mb-2">Suppliers</h2>
              <div className="flex flex-col">
                <div className="flex justify-between mb-1">
                  <p>{totalSuppliers}</p>
                </div>
                <div className="flex justify-between text-gray-600 text-sm">
                  <p>All Suppliers</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between mb-4">
            <div className="relative w-48">
              <input 
                type="text" 
                placeholder="Search Suppliers" 
                className="border rounded py-2 pl-10 pr-4 w-full"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
            </div>
            <div className="flex space-x-2">
              <button 
                onClick={handleUpdate}
                disabled={!selectedSupplier}
                className={`bg-yellow-500 text-white px-4 py-2 rounded shadow ${!selectedSupplier ? 'opacity-50 cursor-not-allowed' : 'hover:bg-yellow-700'}`}
              >
                Update
              </button>
              <button 
                onClick={handleDelete}
                disabled={!selectedSupplier}
                className={`bg-red-500 text-white px-4 py-2 rounded shadow ${!selectedSupplier ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'}`}
              >
                Delete
              </button>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-4">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Supplier ID</th>
                  <th className="py-2 px-4 border-b">Supplier Name</th>
                  <th className="py-2 px-4 border-b">Phone No</th>
                  <th className="py-2 px-4 border-b">Raw Material</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {suppliers.map((supplier) => (
                  <tr 
                    key={supplier.id}
                    className={`cursor-pointer ${selectedSupplier && selectedSupplier.id === supplier.id ? 'bg-gray-200' : ''}`}
                    onClick={() => handleRowClick(supplier)}
                  >
                    <td className="py-2 px-4 border-b">{supplier.id}</td>
                    <td className="py-2 px-4 border-b">{supplier.name}</td>
                    <td className="py-2 px-4 border-b">{supplier.phone}</td>
                    <td className="py-2 px-4 border-b">{supplier.rawmaterial}</td>
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

export default Supplier;
