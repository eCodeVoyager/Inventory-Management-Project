// import { createConnection } from 'mysql2/promise';
// import dotenv from 'dotenv';

// dotenv.config();

// const connectionConfig = {
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// };

// const addOrder = async (order) => {
//   const connection = await createConnection(connectionConfig);
//   const { customerId, productId, productName, quantity, unitPrice } = order;

//   // Check stock quantity
//   const [stockRows] = await connection.query(
//     'SELECT quantity FROM stock WHERE product_id = ?',
//     [productId]
//   );
//   const stockQuantity = stockRows[0]?.quantity;

//   if (stockQuantity === undefined || stockQuantity < quantity) {
//     throw new Error('Insufficient stock');
//   }

//   await connection.query(
//     'INSERT INTO orders (customer_id, product_id, product_name, quantity, unit_price, status) VALUES (?, ?, ?, ?, ?, ?)',
//     [customerId, productId, productName, quantity, unitPrice, 'pending']
//   );

//   // Update stock quantity
//   await connection.query(
//     'UPDATE stock SET quantity = quantity - ? WHERE product_id = ?',
//     [quantity, productId]
//   );

//   await connection.end();
// };


// export default {
//   addOrder,
// };

import db from '../config/db.js'; // Ensure you have your database connection setup

const getNextOrderId = (lastOrderId) => {
    if (!lastOrderId) return 'ORD001';
    const number = parseInt(lastOrderId.slice(1)) + 1;
    return 'ORD' + number.toString().padStart(4, '0');
};

class OrderService {
    async getOrdersByCustomerId(customerId) {
        const query = `
            SELECT o.order_id AS Order_ID, o.order_date AS Order_Date, p.product_name AS Product_Name, 
                   o.order_status AS Order_Status, (o.quantity * p.unit_price) AS Total
            FROM orders o
            JOIN products p ON o.product_id = p.product_id
            WHERE o.customer_id = ?
        `;
        const [orders] = await db.execute(query, [customerId]);
        return orders;
    }

    async getNextOrderId() {
        const query = 'SELECT order_id FROM orders ORDER BY order_id DESC LIMIT 1';
        const [result] = await db.execute(query);
        const lastOrderId = result.length ? result[0].order_id : null;
        return getNextOrderId(lastOrderId);
    }

    async saveOrder(orderData) {
        const nextOrderId = await this.getNextOrderId();
        const query = 'INSERT INTO orders (order_id, customer_id, product_id, quantity, order_date, order_status) VALUES (?, ?, ?, ?, ?, ?)';
        await db.execute(query, [nextOrderId, orderData.customer_id, orderData.product_id, orderData.quantity, orderData.order_date, orderData.order_status]);
        return nextOrderId;
    }
}

export default  OrderService;