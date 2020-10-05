import React, { useContext } from 'react';
import Product from '../Product';
import AlgoContext from '../../contexts/AlgoContext';
import './style.scss';

function CheckoutList({list}) {
  const { productsList }= useContext(AlgoContext);
  return (
    <div>
      {productsList.length > 0 && 
      <ul>
        {productsList.map((product, key) => {
          return (
            <li>
              <Product 
              title={product.title}
              price={product.price}
              key={key}/>
            </li>
          )
        })}
      </ul> }
    </div>
  );
}

export default CheckoutList;