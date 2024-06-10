import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import NavBarDash from '../components/NavBarDash'; // Import the NavBarDash component
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'; 

const Inventory = () => {
  const products = [
    { id: 1, name: 'Product A', quantity: 10, unitPrice: 20, inStock: true },
    { id: 2, name: 'Product B', quantity: 5, unitPrice: 15, inStock: false },
    { id: 3, name: 'Product C', quantity: 15, unitPrice: 25, inStock: true },
    // Add more products as needed
  ];

  const [filter, setFilter] = useState('');
  const totalProducts = products.length;
  const availableProducts = products.filter(product => product.inStock).length;
  const totalValue = products.reduce((acc, product) => acc + (product.quantity * product.unitPrice), 0);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    if (filter === 'instock') return product.inStock;
    if (filter === 'outofstock') return !product.inStock;
    return true;
  });

  return (
    <div className="grid grid-rows-[auto,1fr] h-screen">
      <div className="row-span-1">
        <NavBarDash page="Inventory" /> {/* Pass the page prop */}
      </div>
      <div className="grid grid-cols-8 row-span-1">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-7 container mx-auto p-5" style={{ backgroundColor: '#E6F0DC' }}>
          <div className="flex justify-between mb-2">
            <h2 className="text-lg font-bold">Inventory Summary</h2>
            <Link to="/addproduct">
              <button className="bg-blue-500 text-white px-3 py-1 rounded shadow hover:bg-blue-700">
                Add New Product
              </button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
            <div className="bg-white shadow-lg rounded-lg p-2">
              <h2 className="text-lg font-bold mb-1">All Products</h2>
              <div className="flex flex-col">
                <div className="flex justify-between text-gray-600 text-sm">
                  <p>All Products</p>
                  <p>Available Products</p>
                </div>
                <div className="flex justify-between mb-1">
                  <p>{totalProducts}</p>
                  <p>{availableProducts}</p>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-2">
              <h2 className="text-lg font-bold mb-1">Processing Products</h2>
              <div className="flex flex-col">
                <div className="flex justify-between text-gray-600 text-sm">
                  <p>Processing Products</p>
                  <p>Low Stock Alerts</p>
                </div>
                <div className="flex justify-between mb-1">
                  <p>{totalProducts - availableProducts}</p>
                  <p>{products.filter(product => product.quantity < 5 && product.inStock).length}</p>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-2">
              <h2 className="text-lg font-bold mb-1">Total Inventory Value</h2>
              <div className="flex flex-col">
                <div className="flex justify-between text-gray-600 text-sm">
                  <p>Total Value</p>
                </div>
                <div className="flex justify-between mb-1">
                  <p>${totalValue.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between mb-2">
            <h2 className="text-lg font-bold">Inventory Items</h2>
            <select className="px-2 py-1 border rounded" value={filter} onChange={handleFilterChange}>
              <option value="">All</option>
              <option value="instock">In Stock</option>
              <option value="outofstock">Out of Stock</option>
            </select>
          </div>

          <div className="flex justify-between mb-2">
            <div className="relative w-48">
              <input 
                type="text" 
                placeholder="Search Products" 
                className="border rounded py-1 pl-8 pr-2 w-full"
              />
              <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-2">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-2 border-b">Product ID</th>
                  <th className="py-2 px-2 border-b">Product Name</th>
                  <th className="py-2 px-2 border-b">Quantity</th>
                  <th className="py-2 px-2 border-b">Unit Price</th>
                  <th className="py-2 px-2 border-b">In Stock</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {filteredProducts.map((product) => (
                  <tr key={product.id}>
                    <td className="py-2 px-2 border-b">{product.id}</td>
                    <td className="py-2 px-2 border-b">{product.name}</td>
                    <td className="py-2 px-2 border-b">{product.quantity}</td>
                    <td className="py-2 px-2 border-b">${product.unitPrice}</td>
                    <td className="py-2 px-2 border-b">{product.inStock ? 'Yes' : 'No'}</td>
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

export default Inventory;
