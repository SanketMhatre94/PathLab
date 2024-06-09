// src/components/CitySelector.js

import React, { useEffect, useState } from 'react';
const CitySelector = () => {
   const [city, setCity] = useState('');
  const [location, setLocation] = useState('');
  const cityData = {
    "Navi Mumbai": ["Vashi", "Nerul", "Kharghar", "CBD Belapur", "Panvel"],
    "Thane": ["Vartak Nagar", "Kalwa", "Thane West", "Thane East"],
    "Mumbai": ["Andheri", "Thane", "Dadar", "Powai"]
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
    setLocation(''); // Reset location when city changes
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = () => {
    alert(`City: ${city}, Location: ${location}`);
  };



  return (
    <>
    

  
        <div className="flex justify-center items-center h-screen bg-blue-50 city " >
          <div className="bg-white p-8 rounded-lg shadow-lg ">
         
           <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
          <h4 style={{ fontSize:"20px"}}>  City  </h4> 
          
          </label>
          <select
            id="city"
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            value={city}
            onChange={handleCityChange}
          >
            <option value="">Select a city</option>
            {Object.keys(cityData).map((cityName) => (
              <option key={cityName} value={cityName}>
                {cityName}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
             <h4 style={{fontSize:"20px"}}>    Location   </h4> 
          </label>
          <select
            id="location"
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            value={location}
            onChange={handleLocationChange}
            disabled={!city}
          >
            <option value="">Select a location</option>
            {city && cityData[city].map((locationName) => (
              <option key={locationName} value={locationName}>
                {locationName}
              </option>
            ))}
          </select>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleSubmit}
          disabled={!city || !location}
        >
          Submit
        </button>
          
       
          </div>
        </div>
       

    </>





  );
};


export default CitySelector;


