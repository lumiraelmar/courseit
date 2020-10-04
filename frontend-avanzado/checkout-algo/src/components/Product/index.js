import React, { useContext } from 'react';
import AlgoContext from '../../contexts/AlgoContext';
import './style.scss';

function Product(props) {
  const { data, clase, title, img, price } = props
  const { handleProduct } = useContext(AlgoContext)

  function handleClick() {
    handleProduct(data)
  }

  return (
    <div className='productWrapper' onClick={handleClick}>
      { img && <img className={clase} src={img} /> }
      <h3 className='productTitle'>{title}</h3>
      <p className='productPrice'>{price}</p>
    </div>
  );
}

export default Product;