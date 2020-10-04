import React from 'react';
import Product from '../Product';
import './style.scss';

function CheckoutList({list}) {
  return (
    <div>
      {list.length > 0 && 
      <ul>
        {list.map((product, key) => {
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