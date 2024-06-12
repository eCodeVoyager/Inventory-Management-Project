import { getAllRawMaterials, createRawMaterial, modifyRawMaterial, removeRawMaterial } from '../services/rawMaterialService.js';

export const getRawMaterials = async (req, res) => {
  try {
    const materials = await getAllRawMaterials();
    res.json(materials);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch raw materials' });
  }
};

export const addRawMaterial = async (req, res) => {
  const { materialId, materialName, quantity, unitPrice } = req.body;
  try {
    const newMaterial = await createRawMaterial({ materialId, materialName, quantity, unitPrice });
    res.status(201).json(newMaterial);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add raw material' });
  }
};

export const updateRawMaterial = async (req, res) => {
  const { id } = req.params;
  const { materialName, quantity, unitPrice } = req.body;
  try {
    const updatedMaterial = await modifyRawMaterial(id, { materialName, quantity, unitPrice });
    res.json(updatedMaterial);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update raw material' });
  }
};

export const deleteRawMaterial = async (req, res) => {
  const { id } = req.params;
  try {
    await removeRawMaterial(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete raw material' });
  }
};
