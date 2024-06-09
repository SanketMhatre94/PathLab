// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const TestDetails = () => {
//   const { testId } = useParams();
//   const [testData, setTestData] = useState(null);

//   useEffect(() => {
//     // Replace with your actual API endpoint and method to fetch data from MongoDB
//     axios.get(`/api/tests/${testId}`)
//       .then(response => {
//         setTestData(response.data);
//       })
//       .catch(error => {
//         console.error("There was an error fetching the test data!", error);
//       });
//   }, [testId]);

//   if (!testData) return <div>Loading...</div>;

//   return (
//     <div className="container mx-auto py-8">
//       <h2 className="text-3xl font-bold mb-8 text-center">{testData.name}</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {testData.tests.map((test, index) => (
//           <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
//             <h3 className="text-xl font-bold mb-4">{test.name}</h3>
//             <p className="mb-4">{test.description}</p>
//             <p className="mb-4">Specimen: {test.specimen}</p>
//             <p className="mb-4">Report Delivery: {test.reportDelivery}</p>
//             <p className="font-bold">Price: ₹{test.price}</p>
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
//               Book Now
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TestDetails;
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

const TestByHealthConditions = () => {
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
            name={test["Test Name"]}
            description={test["Test Description"]}
            price={test.Price}
            lab={test["Lab Name/Address"]}
          />
        ))}
      </div>
    </div>
  );
};

export default TestByHealthConditions;