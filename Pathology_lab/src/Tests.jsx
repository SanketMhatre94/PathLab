import React, { useState } from 'react';

const Tests = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Pathology Lab Tests</h1>
      <div className="relative">
        <button onClick={toggleDropdown} className="text-gray-800 text-lg bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 focus:outline-none">
          Select a Test
        </button>
        {isDropdownOpen && (
          <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded shadow-lg">
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Complete Blood Count (CBC)</a>
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Basic Metabolic Panel (BMP)</a>
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Lipid Panel</a>
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Liver Function Test (LFT)</a>
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Thyroid Stimulating Hormone (TSH)</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tests;