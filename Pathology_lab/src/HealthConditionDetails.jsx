import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const HealthConditionDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/getUser/${id}`)
      .then(response => setDetails(response.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!details) return <div>Loading...</div>;

  return (
    <div className="bg-white py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">{details.Test_Name}</h2>
      <p className="text-xl text-center mb-4">{details.Test_Description}</p>
      <p className="text-xl text-center mb-4">{details.Price}</p>
      <p className="text-xl text-center mb-4">{details.Lab_Name_Address}</p>
    </div>
  );
};

export default HealthConditionDetails;