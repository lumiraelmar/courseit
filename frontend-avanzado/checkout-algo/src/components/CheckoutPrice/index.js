import React from 'react';
import './style.scss';

function CheckoutPrice({totalPrice, totalProducts}) {

  return (
    <div>
      <p>Total de productos: {totalProducts}</p>
      <p>Precio total: ${totalPrice}</p>
    </div>
  );
}

export default CheckoutPrice;