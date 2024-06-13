import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import NavBarDash from '../components/NavBarDash';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'; 

const RawMaterials = () => {
  const [materials, setMaterials] = useState([]);
  const [filter, setFilter] = useState('all');
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8000/rawmaterials')
      .then(response => response.json())
      .then(data => setMaterials(data))
      .catch(error => console.error('Error fetching raw materials:', error));
  }, []);

  const filteredMaterials = materials.filter((material) => {
    if (filter === 'inStock') return material.quantity > 0;
    if (filter === 'outOfStock') return material.quantity === 0;
    return true;
  }).filter((material) =>
    material.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalMaterials = materials.length;
  const availableMaterials = materials.filter((material) => material.quantity > 0).length;
  const lowStockMaterials = materials.filter((material) => material.quantity < 5);

  const handleRowClick = (material) => {
    setSelectedMaterial(material);
  };

  const handleUpdate = () => {
    if (selectedMaterial) {
      navigate('/updaterawmaterial', { state: { material: selectedMaterial } });
    }
  };

  const handleDelete = () => {
    if (selectedMaterial) {
      fetch(`http://localhost:8000/rawmaterials/${selectedMaterial.id}`, {
        method: 'DELETE',
      })
        .then(() => {
          setMaterials(materials.filter(material => material.id !== selectedMaterial.id));
          setSelectedMaterial(null);
          alert('Raw material deleted successfully');
        })
        .catch(error => console.error('Error deleting raw material:', error));
    }
  };

  return (
    <div className="grid grid-rows-[auto,1fr] h-screen">
      <div className="row-span-1">
        <NavBarDash page="Raw Materials"/>
      </div>

      <div className="grid grid-cols-8 row-span-1">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-7 container mx-auto p-4 mt-0" style={{ backgroundColor: '#E6F0DC' }}>
          <div className="flex justify-between mb-4">
            <h1 className="text-2xl font-bold">Raw Materials Summary</h1>
            <Link to="/addrawmaterial">
              <button className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
                Add New Raw Material
              </button>
            </Link>
          </div>

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

          <div className="flex justify-between mb-4">
            <div className="relative w-64">
              <input 
                type="text" 
                placeholder="Search Raw Materials" 
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
                disabled={!selectedMaterial}
                className={`bg-yellow-500 text-white px-4 py-2 rounded shadow ${!selectedMaterial ? 'opacity-50 cursor-not-allowed' : 'hover:bg-yellow-700'}`}
              >
                Update
              </button>
              <button 
                onClick={handleDelete}
                disabled={!selectedMaterial}
                className={`bg-red-500 text-white px-4 py-2 rounded shadow ${!selectedMaterial ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'}`}
              >
                Delete
              </button>
            </div>
          </div>

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
                  <tr 
                    key={material.id}
                    className={`cursor-pointer ${selectedMaterial && selectedMaterial.id === material.id ? 'bg-gray-200' : ''}`}
                    onClick={() => handleRowClick(material)}
                  >
                    <td className="py-2 px-4 border-b">{material.id}</td>
                    <td className="py-2 px-4 border-b">{material.name}</td>
                    <td className="py-2 px-4 border-b">{material.quantity}</td>
                    <td className="py-2 px-4 border-b">${material.unitPrice}</td>
                    <td className="py-2 px-4 border-b">
                      {material.quantity > 0 ? 'Yes' : 'No'}
                    </td>
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

export default RawMaterials;
