import pool from '../config/db.js';

// Service function to fetch employee data
const getEmployeeData = async () => {
  try {
    const [rows, fields] = await pool.query('SELECT * FROM employee');
    return rows;
  } catch (error) {
    console.error('Error fetching employee data:', error);
    throw new Error('Internal server error');
  }
};

export { getEmployeeData };
