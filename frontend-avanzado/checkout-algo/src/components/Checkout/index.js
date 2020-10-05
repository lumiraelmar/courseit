import React from 'react';
import CheckoutList from '../CheckoutList'
import CheckoutPrice from '../CheckoutPrice'
import './style.scss';

function Checkout() {
  return (
    <>
      <CheckoutList />
      <CheckoutPrice />
    </>
  );
}

export default Checkout;