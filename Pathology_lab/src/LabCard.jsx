import React from 'react';

const LabCard = ({ lab }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4" style={{ height: '450px' }}>
      <img className="w-full h-48 object-cover" src={lab.imageUrl} alt={lab.name} />
      <div className="px-6 py-4 h-30">
        <div className="font-bold text-xl mb-2 truncate">{lab.name}</div>
        <p className="text-gray-700 text-base">
          {lab.parameters} Parameters
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 h-14 ">
        <span className="text-gray-900 line-through mr-2">₹{lab.originalPrice}</span>
        <span className="text-gray-900 font-bold">₹{lab.discountedPrice}</span>
        <span className="text-yellow-500 font-bold ml-2">{lab.discount}% discount</span>
      </div>
      <div className="px-6 pt-4 pb-4 h-20 flex items-center">
        {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2">Add to Cart</button> */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-[3.4rem]">Book Now</button>
      </div>
    </div>
  );
};

export default LabCard;