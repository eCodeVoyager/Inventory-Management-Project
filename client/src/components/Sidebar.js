import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaList, FaLayerGroup, FaUsers, FaComments, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div style={{ width: '15%', position: 'fixed', height: '100%', backgroundColor: '#2F4050', overflow: 'auto' }}>
      <div style={{ padding: '10px', color: 'white', textAlign: 'center', fontSize: '1.2em', borderBottom: '1px solid white' }}>
        Glean Ceramic Complex
      </div>
      <ul className="nav flex-column" style={{ margin: '10px 0' }}>
        <li className="nav-item" style={{ margin: '10px 0' }}>
          <Link className="nav-link" to="/dashboard" style={{ color: 'white' }}>
            <FaHome /> Dashboard
          </Link>
        </li>
        <li className="nav-item" style={{ margin: '10px 0' }}>
          <Link className="nav-link" to="/orders" style={{ color: 'white' }}>
            <FaList /> Orders
          </Link>
        </li>
        <li className="nav-item" style={{ margin: '10px 0' }}>
          <Link className="nav-link" to="/inventory" style={{ color: 'white' }}>
            <FaLayerGroup /> Inventory
          </Link>
        </li>
        <li className="nav-item" style={{ margin: '10px 0' }}>
          <Link className="nav-link" to="/customers" style={{ color: 'white' }}>
            <FaUsers /> Customers
          </Link>
        </li>
        <li className="nav-item" style={{ margin: '10px 0' }}>
          <Link className="nav-link" to="/conversations" style={{ color: 'white' }}>
            <FaComments /> Conversations
          </Link>
        </li>
        <li className="nav-item" style={{ paddingtop: '80px' }}>
          <Link className="nav-link" to="/logout" style={{ color: 'white' }}>
            <FaSignOutAlt /> Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;