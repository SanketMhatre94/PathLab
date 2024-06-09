// HealthConditionCard.jsx
import React from 'react';
import PropTypes from 'prop-types';

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

export default HealthConditionCard;
