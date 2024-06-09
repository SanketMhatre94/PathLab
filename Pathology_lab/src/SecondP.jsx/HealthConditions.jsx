// HealthConditions.js
import React from 'react';

const healthConditions = [
  { name: 'Alcohol', image: 'images/alcohol.png' },
  { name: 'Allergy', image: 'images/allergy.png' },
  { name: 'Anemia', image: 'images/anemia.png' },
  { name: 'Arthritis', image: 'images/arthritis.png' },
  { name: 'Cancer', image: 'images/cancer.png' },
  { name: 'Diabetes', image: 'images/diabetes.png' },
  { name: 'Fever', image: 'images/fever.png' }
];

const HealthConditions = () => {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Test by Health Conditions</h2>
        <button className="bg-green-500 text-white px-4 py-2 rounded border border-green-500">View More</button>
      </div>
      <p className="mb-6">Choose test by Health Conditions</p>
      <div className="grid grid-cols-7 gap-4">
        {healthConditions.map((condition) => (
          <div key={condition.name} className="flex flex-col items-center p-4 bg-white shadow-md rounded-md">
            <div className="mb-4 bg-red-100 p-4 rounded-full">
              <img src={condition.image} alt={condition.name} className="w-16 h-16" />
            </div>
            <p className="text-lg font-semibold">{condition.name}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-4">
        <button className="border border-gray-400 p-2 rounded mr-2">{'<'}</button>
        <button className="border border-gray-400 p-2 rounded">{'>'}</button>
      </div>
    </div>
  );
};

export default HealthConditions;
