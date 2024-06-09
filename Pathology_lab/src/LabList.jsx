import React from 'react';
import LabCard from './LabCard';

const LabList = ({ labs, cardsPerRow }) => {
  const cardWidth = 300; // Adjust this value based on your card width

  return (
    <div className="flex">
      {labs.map((lab, index) => (
        <div
          key={index}
          className={`${index >= cardsPerRow ? 'hidden md:block' : ''}`}
          style={{ width: `${cardWidth}px` }}
        >
          <LabCard lab={lab} />
        </div>
      ))}
    </div>
  );
};

export default LabList;