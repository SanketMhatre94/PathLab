// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-5 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul>
              <li className="mb-2"><a href="#">About Us</a></li>
              <li className="mb-2"><a href="#">Careers</a></li>
              <li className="mb-2"><a href="#">Blog</a></li>
              <li className="mb-2"><a href="#">Partner with PharmEasy</a></li>
              <li className="mb-2"><a href="#">Sell at PharmEasy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul>
              <li className="mb-2"><a href="#">Order Medicine</a></li>
              <li className="mb-2"><a href="#">Healthcare Products</a></li>
              <li className="mb-2"><a href="#">Lab Tests</a></li>
              <li className="mb-2"><a href="#">Find Nearest Collection Centre</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Need Help</h3>
            <ul>
              <li className="mb-2"><a href="#">Browse All Medicines</a></li>
              <li className="mb-2"><a href="#">Browse All Molecules</a></li>
              <li className="mb-2"><a href="#">Browse All Cities</a></li>
              <li className="mb-2"><a href="#">Browse All Stores</a></li>
              <li className="mb-2"><a href="#">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Policy Info</h3>
            <ul>
              <li className="mb-2"><a href="#">Editorial Policy</a></li>
              <li className="mb-2"><a href="#">Privacy Policy</a></li>
              <li className="mb-2"><a href="#">Vulnerability Disclosure Policy</a></li>
              <li className="mb-2"><a href="#">Terms and Conditions</a></li>
              <li className="mb-2"><a href="#">Customer Support Policy</a></li>
              <li className="mb-2"><a href="#">Return Policy</a></li>
              <li className="mb-2"><a href="#">Smartbuy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">FOLLOW US</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-teal-600"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-teal-600"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-teal-600"><i className="fab fa-youtube"></i></a>
              <a href="#" className="text-teal-600"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-between items-center border-t pt-4">
          <div className="text-sm text-gray-600">
            <h3 className="text-lg font-semibold mb-4">Our Payment Partners</h3>
            <div className="flex space-x-4">
              <img src="images/gpay.png" alt="GPay" className="w-8 h-8" />
              <img src="images/paytm.png" alt="Paytm" className="w-8 h-8" />
              <img src="images/phonepe.png" alt="PhonePe" className="w-8 h-8" />
              <img src="images/mobikwik.png" alt="MobiKwik" className="w-8 h-8" />
              <img src="images/amazonpay.png" alt="Amazon Pay" className="w-8 h-8" />
              <img src="images/mastercard.png" alt="Mastercard" className="w-8 h-8" />
              <img src="images/visa.png" alt="Visa" className="w-8 h-8" />
              <img src="images/rupay.png" alt="RuPay" className="w-8 h-8" />
            </div>
          </div>
          <div className="text-sm text-gray-600">
            © 2024 PharmEasy. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
