// src/Navbar.js
import React from 'react';

const Navbar2 = () => {
  return (
    <nav className="bg-gradient-to-r from-teal-400 to-blue-100 text-white flex justify-between items-center">
      <div className="flex space-x-4">
        <div className="dropdown">
          <button className="text-gray-700">Health Risk</button>
          <div className="dropdown-content hidden absolute bg-white shadow-md p-2">
            <a href="#" className="block px-4 py-2">Option 1</a>
            <a href="#" className="block px-4 py-2">Option 2</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="text-gray-700">Health Conditions</button>
          <div className="dropdown-content hidden absolute bg-white shadow-md p-2">
            <a href="#" className="block px-4 py-2">Option 1</a>
            <a href="#" className="block px-4 py-2">Option 2</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="text-gray-700">Blood Tests</button>
          <div className="dropdown-content hidden absolute bg-white shadow-md p-2">
            <a href="#" className="block px-4 py-2">Option 1</a>
            <a href="#" className="block px-4 py-2">Option 2</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="text-gray-700">Truehealth Packages</button>
          <div className="dropdown-content hidden absolute bg-white shadow-md p-2">
            <a href="#" className="block px-4 py-2">Option 1</a>
            <a href="#" className="block px-4 py-2">Option 2</a>
          </div>
        </div>
        <a href="#" className="text-gray-700">Home Visit</a>
        <a href="#" className="text-gray-700">Rx Upload</a>
      </div>
      <div className="flex space-x-4">
        <a href="#" className="text-gray-700">Sample Tracking</a>
        <a href="#" className="text-gray-700">Download Report</a>
        <a href="#" className="text-gray-700">Login</a>
        <a href="#" className="text-gray-700">Cart</a>
      </div>
    </nav>
  );
};

export default Navbar2;
