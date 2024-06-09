import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const FooterJod = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-400 to-blue-500 text-white py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-8 md:mb-0 md:w-1/2">
          <h2 className="text-lg font-semibold mb-4 ">Contact Us</h2>
          <div className="flex items-center mb-2">
            <FaMapMarkerAlt className="mr-3 text-lg" />
            <div>
              <p>CBD Belapur</p>
              <p className="font-bold">Navi Mumbai, Maharashtra</p>
            </div>
          </div>
          <div className="flex items-center mb-2">
            <FaPhone className="mr-3 text-lg" />
            <p>+1 555 123456</p>
          </div>
          <div className="flex items-center mb-2">
            <FaEnvelope className="mr-3 text-lg" />
            <p>support@company.com</p>
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-lg font-semibold mb-4">About the Website</h2>
          <p className="text-white mb-4">
          Pathology Lab Finder helps you locate top-quality pathology labs for reliable blood tests and advanced diagnostics. Our directory and user reviews ensure you choose the best lab with confidence.
          </p>
          <div className="flex justify-end space-x-4">
            <a href="#" className="text-gray-600 hover:text-white text-2xl"><FaFacebookF /></a>
            <a href="#" className="text-gray-600 hover:text-white text-2xl"><FaTwitter /></a>
            <a href="#" className="text-gray-600 hover:text-white text-2xl"><FaLinkedinIn /></a>
            <a href="#" className="text-gray-600 hover:text-white text-2xl"><FaGithub /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterJod;
