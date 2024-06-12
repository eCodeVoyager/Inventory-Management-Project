import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createConnection } from 'mysql2/promise';
import customerRoutes from './routes/customerRoutes.js';
import employeeRoutes from './routes/employeeRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/customers', customerRoutes);
app.use('/employees', employeeRoutes); // Use employee routes
app.use('/orders', orderRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
