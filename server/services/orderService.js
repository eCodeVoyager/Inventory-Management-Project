import { createConnection } from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const connectionConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

const addOrder = async (order) => {
  const connection = await createConnection(connectionConfig);
  const { customerId, productId, productName, quantity, unitPrice } = order;

  // Check stock quantity
  const [stockRows] = await connection.query(
    'SELECT quantity FROM stock WHERE product_id = ?',
    [productId]
  );
  const stockQuantity = stockRows[0]?.quantity;

  if (stockQuantity === undefined || stockQuantity < quantity) {
    throw new Error('Insufficient stock');
  }

  await connection.query(
    'INSERT INTO orders (customer_id, product_id, product_name, quantity, unit_price, status) VALUES (?, ?, ?, ?, ?, ?)',
    [customerId, productId, productName, quantity, unitPrice, 'pending']
  );

  // Update stock quantity
  await connection.query(
    'UPDATE stock SET quantity = quantity - ? WHERE product_id = ?',
    [quantity, productId]
  );

  await connection.end();
};

export default {
  addOrder,
};
