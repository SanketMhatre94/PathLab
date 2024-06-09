// import React from 'react';

// const testPackages = {
//   Placo: [
//     { name: 'Total Protein & Albumin/Globulin (A/G)', parameters: 4, specimen: 'Serum', delivery: '2Hrs Same Day', price: 180 },
//     { name: 'Urine Routine & Microscopic Examination', parameters: 18, specimen: 'Urine', delivery: 'Same Day (2Hrs)', price: 145 },
//     { name: 'Plasma Renin Activity', parameters: 1, specimen: 'Plasma', delivery: '12:00 PM (Tue, Fri)', price: 5600 }
//     // Add more test packages if needed
//   ],
//   // Add other health conditions with their respective test packages
// };

// const TestCards = ({ condition }) => {
//   const packages = testPackages[condition];

//   return (
//     <div className="mt-8">
//       <h3 className="text-2xl font-bold mb-4 text-center">{condition} Test Packages</h3>
//       <div className="flex flex-wrap justify-center">
//         {packages.map((pkg, index) => (
//           <div key={index} className="bg-gray-100 p-6 m-2 rounded-lg shadow-lg w-64 flex flex-col items-center">
//             <h4 className="text-xl font-bold mb-2 text-center">{pkg.name}</h4>
//             <p className="text-center">Include: {pkg.parameters} parameters</p>
//             <p className="text-center">Specimen: {pkg.specimen}</p>
//             <p className="text-center">Report Delivery: {pkg.delivery}</p>
//             <p className="font-bold text-lg mt-4 text-center">₹{pkg.price}</p>
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mt-4">
//               Book Now
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TestCards;

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const HealthConditionCard = ({ name, description, price, lab }) => (
  <div className="bg-gray-100 p-6 m-2 rounded-lg shadow-lg flex flex-col items-center w-48 flex-shrink-0">
    <p className="text-xl font-medium mb-2 text-center">{name}</p>
    <p className="text-sm mb-2 text-center">{description}</p>
    <p className="text-sm mb-2 text-center">Price: ${price}</p>
    <p className="text-sm mb-4 text-center">Lab: {lab}</p>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
      Know More
    </button>
  </div>
);

HealthConditionCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  lab: PropTypes.string.isRequired,
};

const TestCards = () => {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/tests')
      .then(response => response.json())
      .then(data => setTests(data));
  }, []);

  return (
    <div className="bg-white py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Test by Health Conditions</h2>
      <div className="flex justify-center flex-wrap">
        {tests.map((test, index) => (
          <HealthConditionCard
            key={index}
            name={test["Test_Name"]}
            description={test["Test_Description"]}
            price={test.Price}
            lab={test["Lab_Name_Address"]}
          />
        ))}
      </div>
    </div>
  );
};

export default TestCards;
