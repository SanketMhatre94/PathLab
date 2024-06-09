// HealthRisks.js
import React from 'react';

const healthRisks = [
  { name: 'Heart', icon: '❤️' },
  { name: 'Liver', icon: '🫀' },
  { name: 'Kidney', icon: '🟢' },
  { name: 'Thyroid', icon: '🦷' },
  { name: 'Bone and Joint', icon: '🦴' }
];

const HealthRisks = () => {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Test by Health Risks</h2>
        <button className="bg-green-500 text-white px-4 py-2 rounded">View More</button>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {healthRisks.map((risk) => (
          <div key={risk.name} className="flex flex-col items-center p-4 bg-white shadow-md rounded-md">
            <div className="text-4xl mb-4">{risk.icon}</div>
            <p className="text-lg font-semibold">{risk.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthRisks;
