import React from 'react';
import HealthConditionCard from './HealthConditionCard';

const TestByHealthConditions = ({ healthConditions }) => (
  <div className="bg-white py-8">
    <h2 className="text-3xl font-bold mb-8 text-center">Test by Health Conditions</h2>
    <div className="flex justify-center overflow-x-auto px-4">
      <div className="flex flex-nowrap space-x-4">
        {healthConditions.map((condition) => (
          <HealthConditionCard key={condition.id} id={condition.id} name={condition.name} image={condition.image} />
        ))}
      </div>
    </div>
    <div className="text-center mt-8">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
        View All
      </button>
    </div>
  </div>
);

export default TestByHealthConditions;
