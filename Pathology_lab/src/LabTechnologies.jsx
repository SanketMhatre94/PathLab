import React from 'react';

const LabTechnologies = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Trusted Lab Experts and Latest Lab Technologies
            </h2>
          </div>
          <div>
            <p className="text-lg text-gray-600">
              We are committed to providing the best possible testing equipment to our customers. Our goal is to make it easy for you to deliver accurate results to your customers.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Together, these experts and technologies form the cornerstone of modern scientific discovery, propelling us toward new frontiers of knowledge and innovation.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <img
            src="https://example.com/lab-image.jpg"
            alt="Lab Experts and Technologies"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg"
          >
            Facebook
          </a>
          <a
            href="#"
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-4 py-2 rounded-lg"
          >
            Email
          </a>
          <a
            href="#"
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-4 py-2 rounded-lg"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default LabTechnologies;