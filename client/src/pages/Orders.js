import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';
import NavBarDash from '../components/NavBarDash';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [summary, setSummary] = useState({
    totalOrders: 0,
    pendingOrders: 0,
    completedOrders: 0,
    totalCustomers: 0,
  });
  const [searchQuery, setSearchQuery] = useState('');

  const calculateTotalPrice = (quantity, unitPrice) => quantity * unitPrice;

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:3000/orders');
        const data = await response.json();
        setOrders(data);
        setFilteredOrders(data); // Initialize filtered orders with all orders
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

  useEffect(() => {
    // Filter orders based on searchQuery
    const filtered = orders.filter(order =>
      order.order_id.toString().includes(searchQuery) ||
      order.customer_id.toString().includes(searchQuery) ||
      order.product_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.status.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredOrders(filtered);
  }, [searchQuery, orders]);

  const updateOrderStatus = async (orderId, status) => {
    try {
      await fetch(`http://localhost:3000/orders/${orderId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });
      setOrders(prevOrders =>
        prevOrders.map(order =>
          order.order_id === orderId ? { ...order, status } : order
        )
      );
    } catch (error) {
      console.error('Error updating order status:', error);
    }
  };


  return (
    <div className="h-screen flex flex-col">
      <NavBarDash page="Order" />
      <div className="flex flex-grow">
        <div className="w-1/6">
          <Sidebar />
        </div>
        <div className="flex-grow container mx-auto p-4" style={{ backgroundColor: '#E6F0DC' }}>
          <div className="flex justify-between mb-4">
            <h2 className="text-lg font-bold">Order Summary</h2>
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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-4">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Order ID</th>
                  <th className="py-2 px-4 border-b">Customer ID</th>
                  <th className="py-2 px-4 border-b">Item Name</th>
                  <th className="py-2 px-4 border-b">Quantity</th>
                  <th className="py-2 px-4 border-b">Order Status</th>
                  <th className="py-2 px-4 border-b">Unit Price</th>
                  <th className="py-2 px-4 border-b">Total Price</th>
                  <th className="py-2 px-4 border-b">Date</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {orders.map((order) => (
                  <tr key={order.order_id}>
                    <td className="py-2 px-4 border-b">{order.order_id}</td>
                    <td className="py-2 px-4 border-b">{order.customer_id}</td>
                    <td className="py-2 px-4 border-b">{order.product_name}</td>
                    <td className="py-2 px-4 border-b">{order.quantity}</td>
                    <td className="py-2 px-4 border-b">
                      <select
                        value={order.status}
                        onChange={(e) => updateOrderStatus(order.order_id, e.target.value)}
                        className="border rounded py-1 px-2"
                      >
                        <option value="pending">Pending</option>
                        <option value="processing">Processing</option>
                        <option value="completed">Completed</option>
                      </select>
                    </td>
                    <td className="py-2 px-4 border-b">${order.unit_price}</td>
                    <td className="py-2 px-4 border-b">${calculateTotalPrice(order.quantity, order.unit_price)}</td>
                    <td className="py-2 px-4 border-b">{new Date(order.date).toLocaleDateString()}</td>
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
