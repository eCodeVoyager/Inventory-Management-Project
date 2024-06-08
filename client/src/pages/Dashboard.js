import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import { Pie, Line } from 'react-chartjs-2';
import Sidebar from '../components/Sidebar';
import NavbarDash from '../components/NavBarDash';
import 'tailwindcss/tailwind.css';

ChartJS.register(ArcElement, Tooltip, Legend, Title, LineElement, CategoryScale, LinearScale, PointElement);

const Dashboard = () => {
  // Mock data for dashboard cards
  const totalInventory = 100; // Total number of inventory items
  const totalCustomers = 300; // Total number of customers
  const activeCustomers = 250; // Number of active customers
  const totalOrders = 200; // Total number of orders,
  const pendingOrders = 50; // Number of pending orders
  const completedOrders = 150; // Number of completed orders

  const pieData = {
    labels: ['Acquisition', 'Purchase', 'Retention'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [12, 19, 3],
        backgroundColor: ['#FFCD56', '#4BC0C0', '#36A2EB'],
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Marketing Distribution',
      },
    },
  };

  // Data for Summary Report
  const summaryData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Sales',
        data: [12000, 19000, 30000, 5000, 20000, 30000, 45000],
        fill: true,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  const summaryOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // State for selected day
  const [selectedDay, setSelectedDay] = useState('Mon');

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  return (
    <div className="relative h-screen">
      <NavbarDash page="Dashboard" style={{ fontSize: '100px' }}/>
      <div className="grid grid-cols-8 h-full">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-7 container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-white shadow-lg rounded-lg p-4">
              <h2 className="text-lg font-bold mb-2">Total Inventory</h2>
              <div className="flex flex-col">
                <div className="flex justify-center mb-1">
                  <p>{totalInventory}</p>
                </div>
                <div className="flex justify-center text-gray-600 text-sm">
                  <p>Items</p>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4">
              <h2 className="text-lg font-bold mb-2">Customers</h2>
              <div className="flex flex-col">
                <div className="flex justify-between mb-1">
                  <p>{totalCustomers}</p>
                  <p>{activeCustomers}</p>
                </div>
                <div className="flex justify-between text-gray-600 text-sm">
                  <p>Total Customers</p>
                  <p>Active Customers</p>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4">
              <h2 className="text-lg font-bold mb-2">Orders</h2>
              <div className="flex flex-col">
                <div className="flex justify-between mb-1">
                  <p>{totalOrders}</p>
                  <p>{pendingOrders}</p>
                  <p>{completedOrders}</p>
                </div>
                <div className="flex justify-between text-gray-600 text-sm">
                  <p>All Orders</p>
                  <p>Pending</p>
                  <p>Completed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pie Chart Card and Other Cards */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-4">
            <div className="bg-white shadow-lg rounded-lg p-4 col-span-1 md:col-span-3" style={{ height: '500px', width: '100%' }}>
              <h2 className="text-lg font-bold mb-2">Marketing</h2>
              <Pie data={pieData} options={pieOptions} />
            </div>

            {/* Summary Report */}
            <div className="col-span-1 md:col-span-3 bg-gray-200 p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Summary</h2>
                <div className="flex space-x-4">
                  <div className="relative inline-block text-left">
                    <button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
                      Sales
                      <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 3a1 1 0 00-.707 1.707l4 4a1 1 0 001.414 0l4-4A1 1 0 1017.293 3.707L13 8.586V1a1 1 0 10-2 0v7.586l-3.293-3.293A1 1 0 0010 3z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  <div className="relative inline-block text-right">
                    <button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
                      Last 7 Days
                      <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex mb-4">
                <select 
                  className="border border-gray-300 rounded-md px-4 py-2"
                  value={selectedDay}
                  onChange={handleDayChange}
                >
                  <option value="Mon">Monday</option>
                  <option value="Tue">Tuesday</option>
                  <option value="Wed">Wednesday</option>
                  <option value="Thu">Thursday</option>
                  <option value="Fri">Friday</option>
                  <option value="Sat">Saturday</option>
                  <option value="Sun">Sunday</option>
                </select>
              </div>
              <div className="relative" style={{ height: '300px', width: '100%' }}>
                <Line data={summaryData} options={summaryOptions} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
