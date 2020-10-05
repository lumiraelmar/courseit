import React, { useContext } from 'react';
import AlgoContext from '../../contexts/AlgoContext';
import './style.scss';

function CheckoutPrice() {
  const { productsList, totalPrice }= useContext(AlgoContext);
  return (
    <>
      {productsList == 0 ?
        <p>Tu carrito esta vacio!</p> 
        :
        <div>
          <p>Total de productos: {productsList.length}</p>
          <p>Precio total: ${totalPrice}</p>
        </div>}
    </>
  );
}

export default CheckoutPrice;