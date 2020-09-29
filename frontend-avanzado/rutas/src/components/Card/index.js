import React from 'react'
import './style.scss';

function Card(props) {
  const { img, title, price } = props
  return(
    <div className='cardWrapper'>
      <img src={img} className='img'/>
      <h2 className='title'>{title}</h2>
      <p className='price'>${price}</p>
    </div>
  )
}

export default Card;