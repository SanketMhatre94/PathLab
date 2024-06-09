import React from 'react';
import useTests from './useTests';
import HealthConditionCard from './HealthConditionCard'; // Ensure this path is correct

const HealthConditionList = () => {
  const { tests, loading } = useTests();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Test by Health Conditions</h2>
      <div className="flex justify-center flex-wrap">
        {tests.map((test, index) => (
          <HealthConditionCard
            key={index}
            name={test.testName}
            description={test.testDescription}
            price={test.price}
            lab={test.labNameAddress}
          />
        ))}
      </div>
    </div>
  );
};

export default HealthConditionList;
