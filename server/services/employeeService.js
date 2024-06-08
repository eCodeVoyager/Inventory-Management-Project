import pool from '../config/db.js';

const createEmployee = async (employeeData, phoneNumber) => {
    const connection = await pool.getConnection();
    try {
        await connection.beginTransaction();
        
        const [result] = await connection.query(
            'INSERT INTO employees (name, address, email, password) VALUES (?, ?, ?, ?)',
            [employeeData.name, employeeData.address, employeeData.email, employeeData.password]
        );
        
        const employeeId = result.insertId;
        
        await connection.query(
            'INSERT INTO phone_numbers (number, ownerId, ownerType) VALUES (?, ?, ?)',
            [phoneNumber, employeeId, 'Employee']
        );
        
        await connection.commit();
        
        return { id: employeeId, ...employeeData };
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.release();
    }
};

export { createEmployee };
