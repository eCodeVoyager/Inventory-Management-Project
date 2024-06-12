import { createConnection } from 'mysql2/promise';

const getConnection = async () => {
  return await createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
};

export const getAllRawMaterials = async () => {
  const connection = await getConnection();
  const [rows] = await connection.query('SELECT * FROM raw_materials');
  await connection.end();
  return rows;
};

export const createRawMaterial = async ({ materialId, materialName, quantity, unitPrice }) => {
  const connection = await getConnection();
  const [result] = await connection.query('INSERT INTO raw_materials (id, name, quantity, unitPrice) VALUES (?, ?, ?, ?)', [materialId, materialName, quantity, unitPrice]);
  await connection.end();
  return { id: result.insertId, materialId, materialName, quantity, unitPrice };
};

export const modifyRawMaterial = async (id, { materialName, quantity, unitPrice }) => {
  const connection = await getConnection();
  await connection.query('UPDATE raw_materials SET name = ?, quantity = ?, unitPrice = ? WHERE id = ?', [materialName, quantity, unitPrice, id]);
  await connection.end();
  return { id, materialName, quantity, unitPrice };
};

export const removeRawMaterial = async (id) => {
  const connection = await getConnection();
  await connection.query('DELETE FROM raw_materials WHERE id = ?', [id]);
  await connection.end();
};
