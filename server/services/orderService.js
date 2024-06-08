import pool from '../config/db.js';

const createOrder = async (orderData) => {
    const connection = await pool.getConnection();
    try {
        await connection.beginTransaction();
        
        const [result] = await connection.query(
            'INSERT INTO orders (order_id, customer_id, product_id, product_name, quantity, unit_price) VALUES (?, ?, ?, ?, ?, ?)',
            [orderData.orderId, orderData.customerId, orderData.productId, orderData.productName, orderData.quantity, orderData.unitPrice]
        );
        
        await connection.commit();
        
        return { id: result.insertId, ...orderData };
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.release();
    }
};

const getOrders = async () => {
    const [rows] = await pool.query(
        'SELECT o.order_id, o.product_name, o.quantity, p.unit_price, (o.quantity * p.unit_price) AS total_price ' +
        'FROM orders o ' +
        'JOIN products p ON o.product_id = p.id'
    );
    return rows;
};

const getOrderStats = async () => {
    const [orders] = await pool.query('SELECT COUNT(*) AS totalOrders FROM orders');
    const [pendingOrders] = await pool.query('SELECT COUNT(*) AS pendingOrders FROM orders WHERE order_status = "pending"');
    const [completedOrders] = await pool.query('SELECT COUNT(*) AS completedOrders FROM orders WHERE order_status = "completed"');
    const [customers] = await pool.query('SELECT COUNT(*) AS totalCustomers FROM customers');
    
    return {
        totalOrders: orders[0].totalOrders,
        pendingOrders: pendingOrders[0].pendingOrders,
        completedOrders: completedOrders[0].completedOrders,
        totalCustomers: customers[0].totalCustomers
    };
};

export { createOrder, getOrders, getOrderStats };
