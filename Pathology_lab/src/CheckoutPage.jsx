import React from 'react';
import { useLocation } from 'react-router-dom';

const CheckoutPage = () => {
  const location = useLocation();
  const lab = location.state?.lab;

  return (
    <div>
      <h1>Checkout Page</h1>
      {lab && (
        <div>
          <h2>{lab.name}</h2>
          <p>Parameters: {lab.parameters}</p>
          <p>Discounted Price: ₹{lab.discountedPrice}</p>
          {/* Add other lab details here */}
        </div>
      )}
      {/* Checkout form and other components */}
    </div>
  );
};

export default CheckoutPage;