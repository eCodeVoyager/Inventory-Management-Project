import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import NavBarDash from '../components/NavBarDash'; // Import the NavBarDash component

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

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    if (filter === 'instock') return product.inStock;
    if (filter === 'outofstock') return !product.inStock;
    return true;
  });

  return (
    <div className="grid grid-cols-8 h-screen">
      <div className="col-span-8">
        <NavBarDash page="Inventory" /> {/* Pass the page prop */}
      </div>
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-7 container mx-auto p-4">
        <div className="flex justify-between mt-[-4]">
          <h2 className="text-lg font-bold">Inventory Summary</h2>
          <Link to="/addproduct">
            <button className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
              Add New Product
            </button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-lg font-bold mb-2">All Products</h2>
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
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-lg font-bold mb-2">Processing Products</h2>
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
        </div>

        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-bold">Inventory Items</h2>
          <select className="px-4 py-2 border rounded" value={filter} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="instock">In Stock</option>
            <option value="outofstock">Out of Stock</option>
          </select>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-4">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Product ID</th>
                <th className="py-2 px-4 border-b">Product Name</th>
                <th className="py-2 px-4 border-b">Quantity</th>
                <th className="py-2 px-4 border-b">Unit Price</th>
                <th className="py-2 px-4 border-b">In Stock</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td className="py-2 px-4 border-b">{product.id}</td>
                  <td className="py-2 px-4 border-b">{product.name}</td>
                  <td className="py-2 px-4 border-b">{product.quantity}</td>
                  <td className="py-2 px-4 border-b">${product.unitPrice}</td>
                  <td className="py-2 px-4 border-b">{product.inStock ? 'Yes' : 'No'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
