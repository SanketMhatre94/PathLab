import React from 'react';

const GradientButton = () => {
  return (
    <div className="w-full bg-gradient-to-r from-teal-400 to-blue-500 text-white py-4 px-8 shadow-lg rounded-t-lg">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">
          LabLinker
        </div>
      </div>
    </div>
  );
};

export default GradientButton;