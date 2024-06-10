import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';
import NavBarDash from '../components/NavBarDash';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'; 

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [summary, setSummary] = useState({
    totalOrders: 0,
    pendingOrders: 0,
    completedOrders: 0,
    totalCustomers: 0,
  });

  const calculateTotalPrice = (quantity, unitPrice) => quantity * unitPrice;

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:3000/orders');
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    const fetchSummary = async () => {
      try {
        const response = await fetch('http://localhost:3000/orders/summary');
        const data = await response.json();
        setSummary(data);
      } catch (error) {
        console.error('Error fetching summary:', error);
      }
    };

    fetchOrders();
    fetchSummary();
  }, []);

  return (
    <div className="h-screen flex flex-col ">
      <NavBarDash page="Order" />
      <div className="flex flex-grow">
        <div className="w-1/6">
          <Sidebar />
        </div>
        <div className="col-span-7 container mx-auto p-4 ml-0" style={{ backgroundColor: '#E6F0DC' }}>
          <div className="flex justify-between mb-4 ml-2">
            <h2 className="text-lg font-bold">Customer Summary</h2>
            <Link to="/createneworder">
            <button className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
             Create Orders
            </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-white shadow-lg rounded-lg p-4">
              <h2 className="text-lg font-bold mb-2">Orders</h2>
              <div className="flex flex-col">
                <div className="flex justify-between mb-1">
                  <p>{summary.totalOrders}</p>
                  <p>{summary.pendingOrders}</p>
                  <p>{summary.completedOrders}</p>
                </div>
                <div className="flex justify-between text-gray-600 text-sm">
                  <p>All Orders</p>
                  <p>Pending</p>
                  <p>Completed</p>
                </div>
              </div>
            </div>
            {/* <div className="bg-white shadow-lg rounded-lg p-4">
              <h2 className="text-lg font-bold mb-2">Issues</h2>
              <div className="flex flex-col">
                <div className="flex justify-between mb-1">
                  <p>10</p>
                  <p>5</p>
                  <p>2</p>
                </div>
                <div className="flex justify-between text-gray-600 text-sm">
                  <p>Canceled</p>
                  <p>Returned</p>
                  <p>Damaged</p>
                </div>
              </div>
            </div> */}
            <div className="bg-white shadow-lg rounded-lg p-4">
              <h2 className="text-lg font-bold mb-2">Customers</h2>
              <div className="flex flex-col">
                <div className="flex justify-between mb-1">
                  <p>{summary.totalCustomers}</p>
                </div>
                <div className="flex justify-between text-gray-600 text-sm">
                  <p>Total Customers</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between mb-4">
            <div className="relative w-48">
              <input 
                type="text" 
                placeholder="Search Order" 
                className="border rounded py-2 pl-10 pr-4 w-full"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                < MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-4">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Order ID</th>
                  <th className="py-2 px-4 border-b">Item Name</th>
                  <th className="py-2 px-4 border-b">Quantity</th>
                  <th className="py-2 px-4 border-b">Unit Price</th>
                  <th className="py-2 px-4 border-b">Total Price</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {orders.map((order) => (
                  <tr key={order.order_id}>
                    <td className="py-2 px-4 border-b">{order.order_id}</td>
                    <td className="py-2 px-4 border-b">{order.product_name}</td>
                    <td className="py-2 px-4 border-b">{order.quantity}</td>
                    <td className="py-2 px-4 border-b">${order.unit_price}</td>
                    <td className="py-2 px-4 border-b">${calculateTotalPrice(order.quantity, order.unit_price)}</td>
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

export default Order;