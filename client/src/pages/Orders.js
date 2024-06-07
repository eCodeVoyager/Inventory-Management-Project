import React from 'react';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';
import NavBarDash from '../components/NavBarDash';  // Import the NavBarDash component

const Order = () => {
  const orders = [
    { id: 1, itemName: 'Item A', quantity: 2, unitPrice: 10 },
    { id: 2, itemName: 'Item B', quantity: 1, unitPrice: 20 },
    { id: 3, itemName: 'Item C', quantity: 5, unitPrice: 5 },
  ];

  const calculateTotalPrice = (quantity, unitPrice) => quantity * unitPrice;

  return (
    <div className="h-screen flex flex-col">
      {/* Add NavBarDash at the top */}
      <NavBarDash page="Order"/>
      
      <div className="flex flex-grow">
        <div className="w-1/8">
          <Sidebar />
        </div>
        <div className="w-7/8 container mx-auto p-4">
          {/* Add Order Button */}
          <div className="flex justify-end mb-4">
          <Link to="/createneworder">
              <button className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
                Create New Order
              </button>
            </Link>
          </div>
          
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-white shadow-lg rounded-lg p-4">
              <h2 className="text-lg font-bold mb-2">Orders</h2>
              <div className="flex flex-col">
                <div className="flex justify-between mb-1">
                  <p>100</p>
                  <p>50</p>
                  <p>50</p>
                </div>
                <div className="flex justify-between text-gray-600 text-sm">
                  <p>All Orders</p>
                  <p>Pending</p>
                  <p>Completed</p>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4">
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
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4">
              <h2 className="text-lg font-bold mb-2">Customers</h2>
              <div className="flex flex-col">
                <div className="flex justify-between mb-1">
                  <p>300</p>
                </div>
                <div className="flex justify-between text-gray-600 text-sm">
                  <p>Total Customers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
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
                  <tr key={order.id}>
                    <td className="py-2 px-4 border-b">{order.id}</td>
                    <td className="py-2 px-4 border-b">{order.itemName}</td>
                    <td className="py-2 px-4 border-b">{order.quantity}</td>
                    <td className="py-2 px-4 border-b">${order.unitPrice}</td>
                    <td className="py-2 px-4 border-b">${calculateTotalPrice(order.quantity, order.unitPrice)}</td>
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
