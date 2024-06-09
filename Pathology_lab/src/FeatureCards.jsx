import React from 'react';

const FeatureCards = () => {
  return (
    <div className="flex justify-center space-x-4 my-8">
      <div className="bg-purple-100 rounded-lg p-6 flex items-center space-x-4 w-[30rem]">
        <div className="bg-purple-500 text-white rounded-full p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-purple-700">Expert Doctors</h3>
          <p className="text-purple-600 ml-4 text-xl">Proficient medical professionals</p>
        </div>
      </div>

      <div className="bg-yellow-100 rounded-lg p-6 flex items-center space-x-4 w-[30rem]">
        <div className="bg-yellow-500 text-white rounded-full p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-yellow-700">Fair Prices</h3>
          <p className="text-yellow-600 ml-4 text-xl">Transparency and honesty in pricing</p>
        </div>
      </div>

      <div className="bg-blue-100 rounded-lg p-6 flex items-center space-x-4 w-[30rem]">
        <div className="bg-blue-500 text-white rounded-full p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-blue-700">24/7 Support</h3>
          <p className="text-blue-600 ml-4 text-xl">Commitment to continuous support</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;