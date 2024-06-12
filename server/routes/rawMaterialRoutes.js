import express from 'express';
import { getRawMaterials, addRawMaterial, updateRawMaterial, deleteRawMaterial } from '../controllers/rawMaterialController.js';

const router = express.Router();

router.get('/', getRawMaterials);
router.post('/', addRawMaterial);
router.put('/:id', updateRawMaterial);
router.delete('/:id', deleteRawMaterial);

export default router;
