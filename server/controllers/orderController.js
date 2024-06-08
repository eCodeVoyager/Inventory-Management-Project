import { createConnection } from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

export const createOrder = async (req, res) => {
  const { orderId, customerId, productId, productName, quantity } = req.body;

  try {
    const connection = await createConnection(dbConfig);
    const [product] = await connection.query('SELECT unit_price FROM products WHERE product_id = ?', [productId]);

    if (product.length === 0) {
      res.status(400).send('Product not found');
      return;
    }

    const unitPrice = product[0].unit_price;
    const totalPrice = quantity * unitPrice;

    await connection.query(
      'INSERT INTO orders (order_id, customer_id, product_id, product_name, quantity, unit_price, total_price) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [orderId, customerId, productId, productName, quantity, unitPrice, totalPrice]
    );

    res.status(201).send('Order created successfully');
    await connection.end();
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).send('Internal server error');
  }
};

export const getOrdersSummary = async (req, res) => {
  try {
    const connection = await createConnection(dbConfig);
    const [orders] = await connection.query('SELECT COUNT(*) AS totalOrders FROM orders');
    const [pendingOrders] = await connection.query('SELECT COUNT(*) AS pendingOrders FROM orders WHERE order_status = "Pending"');
    const [completedOrders] = await connection.query('SELECT COUNT(*) AS completedOrders FROM orders WHERE order_status = "Completed"');
    const [totalCustomers] = await connection.query('SELECT COUNT(*) AS totalCustomers FROM customers');

    res.json({
      totalOrders: orders[0].totalOrders,
      pendingOrders: pendingOrders[0].pendingOrders,
      completedOrders: completedOrders[0].completedOrders,
      totalCustomers: totalCustomers[0].totalCustomers,
    });

    await connection.end();
  } catch (error) {
    console.error('Error fetching orders summary:', error);
    res.status(500).send('Internal server error');
  }
};
