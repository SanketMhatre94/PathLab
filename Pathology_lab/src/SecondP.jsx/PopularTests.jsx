import React from 'react';

const tests1 = [
  { name: 'Calcium Test', price: 260, popularity: 0 },
  { name: 'CBC (Complete Blood Count) Hemogram Test', price: 330, popularity: 5 },
  { name: 'Creatinine Test, Serum', price: 250, popularity: 0 },
  { name: 'CRP (C-Reactive Protein) Test', price: 590, popularity: 0 },
];

const tests2 = [
  { name: 'Creatinine, advanced (Above 18 years)', price: 280, popularity: 0 },
  { name: 'Electrolytes Serum Test', price: 550, popularity: 0 },
  { name: 'ESR Automated Blood Test', price: 150, popularity: 0 },
  { name: 'Fasting Blood Sugar FBS Test', price: 90, popularity: 0 },
];

const PopularTests = () => {
  const allTests = [...tests1, ...tests2];

  return (
    <div className="p-8">
      <div className="text-2xl font-semibold mb-4">Popular Tests</div>
      <div className="flex space-x-2 mb-4">
        <button className="bg-green-500 text-white py-1 px-4 rounded">All</button>
        <button className="text-gray-700 py-1 px-4 rounded">Male</button>
        <button className="text-gray-700 py-1 px-4 rounded">Female</button>
      </div>
      <div className="text-gray-600 mb-4">Choose from our frequently booked blood tests</div>
      <div className="flex flex-wrap">
        {allTests.map((test, index) => (
          <div key={index} className="bg-blue-100 rounded-lg shadow-md p-4 w-64 m-2">
            <div className="flex justify-between items-start mb-2">
              <div className="text-lg font-semibold">{test.name}</div>
              <div className="flex items-center">
                <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">{test.popularity}</span>
                <span className="ml-2 text-gray-500 text-lg">&#9733;</span>
              </div>
            </div>
            <div className="text-lg text-gray-700 mb-2">Rs.{test.price}</div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mb-1">Add To Cart</button>
          </div>
        ))}
      </div>
      {/* <div className="flex justify-end space-x-2 mt-4">
        <button className="bg-gray-200 p-2 rounded">&#8592;</button>
        <button className="bg-gray-200 p-2 rounded">&#8594;</button>
      </div> */}
    </div>
  );
};

export default PopularTests;
