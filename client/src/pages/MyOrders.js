// MyOrders.js

import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavBar';
import axios from 'axios';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const customerId = 'your_customer_id'; // Replace with actual customer ID or get dynamically
       const response = await axios.get(`http://localhost:8800/api/orders/${customerId}`);
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{ padding: '30px' }}>
        <h1 style={{ fontSize: '2em', fontWeight: 'lighter', textAlign: 'center' }}>My Orders</h1>
        <table style={{ width: '100%', borderCollapse: 'collapse', padding: '30px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <th style={{ padding: '10px' }}>Order No</th>
              <th style={{ padding: '10px' }}>Date</th>
              <th style={{ padding: '10px' }}>Product Name</th>
              <th style={{ padding: '10px' }}>Total</th>
              <th style={{ padding: '10px' }}>Order Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '10px' }}>{order.Order_ID}</td>
                <td style={{ padding: '10px' }}>{order.Order_Date}</td>
                <td style={{ padding: '10px' }}>{order.Product_Name}</td>
                <td style={{ padding: '10px' }}>{order.Total}</td>
                <td style={{ padding: '10px' }}>{order.Order_Status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;