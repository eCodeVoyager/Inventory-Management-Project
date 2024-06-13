// const orderService = require('../services/orderService');

// const getOrdersByCustomer = async (req, res) => {
//   try {
//     const customerId = req.params.customerId;
//     const orders = await orderService.getOrdersByCustomer(customerId);
//     res.status(200).json(orders);
//   } catch (error) {
//     console.error('Error fetching orders:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };

// const getOrders = async (req, res) => {
//   try {
//     const orders = await orderService.getOrders();
//     res.json(orders);
//   } catch (error) {
//     res.status(500).json({ error: 'Error fetching orders' });
//   }
// };

// const getOrderSummary = async (req, res) => {
//   try {
//     const summary = await orderService.getOrderSummary();
//     res.json(summary);
//   } catch (error) {
//     res.status(500).json({ error: 'Error fetching summary' });
//   }
// };

// const addOrder = async (req, res) => {
//   console.log('t1');
//   try {
//     const newOrder = req.body;
//     await orderService.addOrder(newOrder);
//     res.status(201).json({ message: 'Order added successfully' });
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ error: error.message });
//   }
// };

// const updateOrderStatus = async (req, res) => {
//   try {
//     const { orderId } = req.params;
//     const { status } = req.body;
//     await orderService.updateOrderStatus(orderId, status);
//     res.json({ message: 'Order status updated successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Error updating order status' });
//   }
// };

// module.exports = {
//   getOrdersByCustomer,
//   getOrders,
//   getOrderSummary,
//   addOrder,
//   updateOrderStatus,
// };

// orderController.js

import db from '../config/db.js' // Assuming db connection setup in db.js
import OrderService from '../services/orderService.js';

// Controller to fetch all orders for a specific customer
export const getOrdersByCustomerId = async (req, res) =>  {
  const customerId = req.params.customerId;
  try {
    const query = `
      SELECT o.Order_ID, o.Order_Date, p.Product_Name, o.Order_Status, (o.Quantity * p.Unit_Price) AS Total
      FROM Orders o
      INNER JOIN Products p ON o.Product_ID = p.Product_ID
      WHERE o.Customer_ID = ?
    `;
    db.query(query, [customerId], (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
};

// Controller to save a new order
export const saveOrder = async (req, res) =>  {
  const { Order_Id, Order_Date, Product_ID, Order_Status, Quantity } = req.body;
  try {
    const query = 'INSERT INTO Orders (Order_ID, Order_Date, Product_ID, Order_Status, Quantity) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [Order_Id, Order_Date, Product_ID, Order_Status, Quantity], (err, result) => {
      if (err) throw err;
      res.status(201).json({ message: 'Order saved successfully' });
    });
  } catch (error) {
    console.error('Error saving order:', error);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
};

// Controller to get the next available Order_ID
export const getNextOrderId = async (req, res) =>  {
  try {
    const query = 'SELECT Order_ID FROM Orders ORDER BY Order_ID DESC LIMIT 1';
    const result = await new Promise((resolve, reject) => {
      db.query(query, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    const lastOrderId = result.length ? result[0].Order_ID : null;
    const newOrderId = getNextOrderId(lastOrderId);

    res.json({ Order_Id: newOrderId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
};

export default { getOrdersByCustomerId, saveOrder, getNextOrderId };