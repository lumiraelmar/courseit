import React, { useState, useContext } from 'react';
import AlgoContext from '../../contexts/AlgoContext';
import CheckoutList from '../CheckoutList'
import CheckoutPrice from '../CheckoutPrice'
import './style.scss';

function Checkout() {
  const { productsList, totalPrice }= useContext(AlgoContext);

  return (
    <>
      {productsList == 0 ?
          <p>Tu carrito esta vacio!</p> 
          :
          <div>
            <CheckoutList list={productsList}/>
            <CheckoutPrice 
            totalProducts={productsList.length}
            totalPrice={totalPrice} />
          </div>
        }
    </>
  );
}

export default Checkout;