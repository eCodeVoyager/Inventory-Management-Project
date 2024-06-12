import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import customerRoutes from './routes/customerRoutes.js';
import employeeRoutes from './routes/employeeRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import productRoutes from './routes/productRoutes.js';
import rawMaterialRoutes from './routes/rawMaterialRoutes.js'; // Add this line

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/customers', customerRoutes);
app.use('/employees', employeeRoutes);
app.use('/orders', orderRoutes);
app.use('/products', productRoutes);
app.use('/rawmaterials', rawMaterialRoutes); // Add this line

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
