import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const UpdateSupplierPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const supplier = location.state?.supplier;

  const [supplierId, setSupplierId] = useState('');
  const [supplierName, setSupplierName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [rawmaterial, setRawmaterial] = useState('');

  useEffect(() => {
    if (supplier) {
      setSupplierId(supplier.id);
      setSupplierName(supplier.name);
      setAddress(supplier.address);
      setPhone(supplier.phone);
      setEmail(supplier.email);
      setRawmaterial(supplier.rawmaterial);
    }
  }, [supplier]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add the logic to update the supplier data
    console.log('Supplier updated:', { supplierId, supplierName, address, phone, email, rawmaterial });
    // Redirect back to the suppliers page or wherever you want
    navigate('/suppliers');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Update Supplier</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="supplierId" className="block mb-1">Supplier ID</label>
            <input type="text" id="supplierId" value={supplierId} readOnly className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100" />
          </div>
          <div className="mb-4">
            <label htmlFor="supplierName" className="block mb-1">Supplier Name</label>
            <input type="text" id="supplierName" value={supplierName} onChange={(e) => setSupplierName(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-1">Phone No</label>
            <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="rawmaterial" className="block mb-1">Raw Material</label>
            <input type="text" id="rawmaterial" value={rawmaterial} onChange={(e) => setRawmaterial(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
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
