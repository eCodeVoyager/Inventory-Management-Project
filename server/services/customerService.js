import pool from '../config/db.js';

const createCustomer = async (customerData, phoneNumber) => {
    const connection = await pool.getConnection();
    try {
        await connection.beginTransaction();
        
        const [result] = await connection.query(
            'INSERT INTO customers (name, address, email, password) VALUES (?, ?, ?, ?)',
            [customerData.name, customerData.address, customerData.email, customerData.password]
        );
        
        const customerId = result.insertId;
        
        await connection.query(
            'INSERT INTO phone_numbers (number, ownerId, ownerType) VALUES (?, ?, ?)',
            [phoneNumber, customerId, 'Customer']
        );
        
        await connection.commit();
        
        return { id: customerId, ...customerData };
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.release();
    }
};

export { createCustomer };
