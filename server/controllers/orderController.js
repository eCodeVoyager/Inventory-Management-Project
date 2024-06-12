import OrderService from '../services/orderService.js';

export const getOrders = async (req, res) => {
  try {
    const orders = await OrderService.getOrders();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching orders' });
  }
};

export const getOrderSummary = async (req, res) => {
  try {
    const summary = await OrderService.getOrderSummary();
    res.json(summary);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching summary' });
  }
};

export const addOrder = async (req, res) => {
  try {
    const newOrder = req.body;
    await OrderService.addOrder(newOrder);
    res.status(201).json({ message: 'Order added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;
    await OrderService.updateOrderStatus(orderId, status);
    res.json({ message: 'Order status updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error updating order status' });
  }
};
