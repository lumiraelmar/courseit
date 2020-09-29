import React from 'react';
import Product from '../Product'

function Carousel(props) {
  const info = ['producto 1', 'producto 2', 'producto 3']
  return (
    <div className='carousel'>
      {info.map((product, key) => {
      return (
        <Product product={product} key={key}/>
      )
    })}
    </div>
  )
}

export default Carousel;