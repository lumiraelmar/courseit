import React from 'react';
import Product from '../Product'
import Data from '../../data/data.json'
import './style.scss';

function Products() {
  const [first, second, third] = Data
  return (
    <div className='productsWrapper'>
      <div className='bigProducts'>
        <Product 
        data={first}
        title={first.title}
        img={first.img}
        price={first.price}
        clase='big' />
      </div>
      <div className='smallProducts'>
        <div className='smallProduct'>
          <Product
          data={second}
          title={second.title}
          img={second.img}
          price={second.price} 
          clase='small' />
        </div>
        <div className='smallProduct'>
          <Product 
          data={third}
          title={third.title}
          img={third.img}
          price={third.price} 
          clase='small' />
        </div>
      </div>
    </div>
  );
}

export default Products;