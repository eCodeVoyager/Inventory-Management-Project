import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import NavBarDash from '../components/NavBarDash';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'; 

const Inventory = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from backend
    fetch('/api/products')
    .then(response => response.json())
    .then(data => {
      setProducts(data.products);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }, []);

  const [filter, setFilter] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const totalProducts = products.length;
  const availableProducts = products.filter(product => product.inStock).length;
  const totalValue = products.reduce((acc, product) => acc + (product.quantity * product.unitPrice), 0);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleRowClick = (product) => {
    setSelectedProduct(product);
  };

  const handleUpdate = () => {
    if (selectedProduct) {
      // Navigate to the update page with the selected product's details
      navigate('/updateproduct', { state: { product: selectedProduct } });
    }
  };

  const handleDelete = () => {
    if (selectedProduct) {
      // Logic for deleting the product
      alert(`Delete Product ${selectedProduct.id}`);
    }
  };

  const filteredProducts = products.filter((product) => {
    if (filter === 'instock') return product.inStock;
    if (filter === 'outofstock') return !product.inStock;
    return true;
  }).filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-rows-[auto,1fr] h-screen">
      <div className="row-span-1">
        <NavBarDash page="Products" />
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
              <h2 className="text-lg font-bold mb-1">Low Stock Products</h2>
              <div className="flex flex-col">
                <div className="flex justify-between text-gray-600 text-sm">
                  <p>Low Stock Alerts</p>
                </div>
                <div className="flex justify-between mb-1">
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
            <div className="relative w-64">
              <input 
                type="text" 
                placeholder="Search Products" 
                className="border rounded py-1 pl-8 pr-2 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
            </div>
            <div className="flex space-x-2">
              <button 
                onClick={handleUpdate}
                disabled={!selectedProduct}
                className={`bg-yellow-500 text-white px-3 py-1 rounded shadow ${!selectedProduct ? 'opacity-50 cursor-not-allowed' : 'hover:bg-yellow-700'}`}
              >
                Update
              </button>
              <button 
                onClick={handleDelete}
                disabled={!selectedProduct}
                className={`bg-red-500 text-white px-3 py-1 rounded shadow ${!selectedProduct ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'}`}
              >
                Delete
              </button>
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
                  <tr 
                    key={product.id}
                    className={`cursor-pointer ${selectedProduct && selectedProduct.id === product.id ? 'bg-gray-200' : ''}`}
                    onClick={() => handleRowClick(product)}
                  >
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
