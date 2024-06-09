import React from 'react';
import TestByHealthRisks from './TestByHealthRisks';
import PropTypes from 'prop-types';

// HealthConditionCard Component
const HealthConditionCard = ({ name, image }) => (
  <div className="bg-gray-100 p-6 m-2 rounded-lg shadow-lg flex flex-col items-center w-48 flex-shrink-0">
    <img src={image} alt={name} className="mb-4 w-16 h-16 object-contain" />
    <p className="text-xl font-medium mb-4 text-center">{name}</p>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
      Know More
    </button>
  </div>
);

HealthConditionCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

// Main Component
const TestByHealthConditions = () => {
  const healthConditions = [
    { name: 'Placo', image: 'img' },
    { name: 'Allergy', image: 'https://th.bing.com/th/id/OIP.b5wT_dyRFrRzVQPD_X9pwAHaHa?pid=ImgDet&w=179&h=179&c=7&dpr=1.3' },
    { name: 'Alcohol', image: 'https://th.bing.com/th/id/OIP.iNLEzLa8Kwz8QsDeToFPrwHaHa?w=185&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'Anemia', image: 'https://th.bing.com/th/id/OIP.w_V_o_Llyfqig8uNXqRXXAHaHa?w=200&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'Arthritis', image: 'https://th.bing.com/th/id/OIP.QLAH_P4tBujqvie8Ne_7qAHaHa?w=173&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'Cancer', image: 'https://th.bing.com/th/id/OIP.6emcOVFTH_5wz5BvKkV4AgHaHa?w=164&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'Diabetes', image: 'https://th.bing.com/th/id/OIP.NSrQ8rDgvPrhJmQ5Bk2y-wHaHa?w=213&h=213&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'Fever', image: 'https://th.bing.com/th/id/OIP.GbJWkYOng7NJwIN3A3loGwHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'Pregnancy', image: 'https://th.bing.com/th/id/OIP.JZgYwgnuTjRCfwgfu9WE_AHaHa?w=216&h=217&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'Hepatitis', image: 'https://th.bing.com/th/id/OIP.ddHrLyaeDSqDYVa-SMENhQHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
  ];

  return (
    <div className="bg-white py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Test by Health Conditions</h2>
      <div className="flex justify-center overflow-x-auto px-4">
        <div className="flex flex-nowrap space-x-4">
          {healthConditions.map((condition, index) => (
            <HealthConditionCard key={index} name={condition.name} image={condition.image} />
          ))}
        </div>
      </div>
      <div className="text-center mt-8">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
          View All
        </button>
      </div>
      <TestByHealthRisks />
    </div>
  );
};

export default TestByHealthConditions;
