import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Sidebar from '../components/Sidebar';
import NavBarDash from '../components/NavBarDash';

const RawMaterials = () => {
  const [materials, setMaterials] = useState([
    { id: 1, name: 'Material A', quantity: 100, unitPrice: 10, inStock: true },
    { id: 2, name: 'Material B', quantity: 50, unitPrice: 20, inStock: true },
    { id: 3, name: 'Material C', quantity: 0, unitPrice: 30, inStock: false },
    // Add more mock data as needed
  ]);
  const [filter, setFilter] = useState('all');

  const handleAddNewMaterial = () => {
    // Logic for adding new material
    alert('Add New Material button clicked!');
  };

  const filteredMaterials = materials.filter((material) => {
    if (filter === 'inStock') return material.inStock;
    if (filter === 'outOfStock') return !material.inStock;
    return true;
  });

  const totalMaterials = materials.length;
  const availableMaterials = materials.filter((material) => material.inStock).length;
  const lowStockMaterials = materials.filter((material) => material.quantity < 10);

  return (
    <div className="grid grid-cols-8 h-screen">
      <div className="col-span-8">
        <NavBarDash page="Raw Materials"/>
      </div>

      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-7 container mx-auto p-4 mt-0">
        <div className="flex justify-between mb-4 mt-0">
          <h1 className="text-2xl font-bold">Raw Materials Summary</h1>
          {/* Use Link component for navigation */}
          <Link to="/addrawmaterial">
            <button className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
              Add New Raw Material
            </button>
          </Link>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-lg font-bold mb-2">Materials Summary</h2>
            <div className="flex flex-col">
              <div className="flex justify-between mb-1">
                <p>{totalMaterials}</p>
                <p>{availableMaterials}</p>
              </div>
              <div className="flex justify-between text-gray-600 text-sm">
                <p>All Materials</p>
                <p>Available Materials</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-lg font-bold mb-2">Low Stock Alert</h2>
            <ul>
              {lowStockMaterials.map((material) => (
                <li key={material.id}>
                  {material.name} - Quantity: {material.quantity}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Filter and Table Section */}
        <div className="flex justify-between mb-4 items-center">
          <h2 className="text-lg font-bold">Raw Materials</h2>
          <div className="flex items-center">
            <label className="mr-2">Filter: </label>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border rounded px-2 py-1"
            >
              <option value="all">All</option>
              <option value="inStock">In Stock</option>
              <option value="outOfStock">Out of Stock</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Material ID</th>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Quantity</th>
                <th className="py-2 px-4 border-b">Unit Price</th>
                <th className="py-2 px-4 border-b">In Stock</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {filteredMaterials.map((material) => (
                <tr key={material.id}>
                  <td className="py-2 px-4 border-b">{material.id}</td>
                  <td className="py-2 px-4 border-b">{material.name}</td>
                  <td className="py-2 px-4 border-b">{material.quantity}</td>
                  <td className="py-2 px-4 border-b">${material.unitPrice}</td>
                  <td className="py-2 px-4 border-b">
                    {material.inStock ? 'Yes' : 'No'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RawMaterials;
