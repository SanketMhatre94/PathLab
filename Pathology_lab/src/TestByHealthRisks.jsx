import React from 'react';

const TestByHealthRisks = () => {
  const healthRisks = [
    { name: 'Heart', icon: '🫀' },
    { name: 'Liver', icon: '🍇' },
    { name: 'Kidney', icon: '🫘' },
    { name: 'Bone', icon: '🦴' },
    { name: 'Thyroid', icon: '🦷' },
  ];

  return (
    <div className="bg-white py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Test by Health Risks</h2>
      <div className="flex justify-center space-x-6">
        {healthRisks.map((risk, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center w-1/5">
            <span className="text-5xl mb-4">{risk.icon}</span>
            <p className="text-lg font-medium mb-4">{risk.name}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
              Know More
            </button>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
          View All
        </button>
      </div>
    </div>
  );
};

export default TestByHealthRisks;