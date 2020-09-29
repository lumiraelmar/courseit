import React from 'react';

function Product(props) {
  const { product } = props
  return (
    <>
        <div>{product}</div>
    </>
  )
}

export default Product;