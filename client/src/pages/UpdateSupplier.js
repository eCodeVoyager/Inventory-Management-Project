import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateSupplierPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const supplier = location.state?.supplier;

  const [supplierName, setSupplierName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [rawMaterial, setRawMaterial] = useState('');

  useEffect(() => {
    if (supplier) {
      setSupplierName(supplier.name);
      setAddress(supplier.address);
      setPhone(supplier.phone);
      setEmail(supplier.email);
      setRawMaterial(supplier.rawmaterial);
    }
  }, [supplier]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!supplierName || !address || !phone || !email || !rawMaterial) {
      Swal.fire('All fields are required');
      return;
    }

    try {
      const response = await fetch(`/api/suppliers/${supplier.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: supplierName, address, phone, email, rawmaterial: rawMaterial }),
      });

      if (response.ok) {
        Swal.fire('Success', 'Supplier updated successfully', 'success');
        navigate('/suppliers');
      } else {
        throw new Error('Failed to update supplier');
      }
    } catch (error) {
      console.error('Error updating supplier:', error);
      Swal.fire('Error', 'Error updating supplier', 'error');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#E6F0DC]">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Update Supplier</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="supplierName" className="block mb-1">Supplier Name</label>
            <input type="text" id="supplierName" value={supplierName} onChange={(e) => setSupplierName(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block mb-1">Address</label>
            <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-1">Phone No</label>
            <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="rawMaterial" className="block mb-1">Raw Material</label>
            <input type="text" id="rawMaterial" value={rawMaterial} onChange={(e) => setRawMaterial(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateSupplierPage;
