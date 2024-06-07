import express from 'express';
import cors from 'cors';
import {PORT }  from './env.js';
import  dotenv from 'dotenv';  

dotenv.config();
const app = express();
app.use(cors());

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})