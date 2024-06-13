import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const UpdateRawMaterialPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const material = location.state?.material;

  const [materialId, setMaterialId] = useState('');
  const [materialName, setMaterialName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unitPrice, setUnitPrice] = useState('');

  useEffect(() => {
    if (material) {
      setMaterialId(material.id);
      setMaterialName(material.name);
      setQuantity(material.quantity);
      setUnitPrice(material.unitPrice);
    }
  }, [material]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8000/rawmaterials/${materialId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ materialName, quantity, unitPrice }),
    })
      .then(response => response.json())
      .then(() => {
        alert('Raw material updated successfully');
        navigate('/rawmaterials');
      })
      .catch(error => console.error('Error updating raw material:', error));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#E6F0DC]">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Update Raw Material</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="materialId" className="block mb-1">Material ID</label>
            <input type="text" id="materialId" value={materialId} readOnly className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100" />
          </div>
          <div className="mb-4">
            <label htmlFor="materialName" className="block mb-1">Material Name</label>
            <input type="text" id="materialName" value={materialName} onChange={(e) => setMaterialName(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" required />
          </div>
          <div className="mb-4">
            <label htmlFor="quantity" className="block mb-1">Quantity</label>
            <input type="number" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" required />
          </div>
          <div className="mb-4">
            <label htmlFor="unitPrice" className="block mb-1">Unit Price</label>
            <input type="number" id="unitPrice" value={unitPrice} onChange={(e) => setUnitPrice(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" required />
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateRawMaterialPage;
