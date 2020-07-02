import React from 'react';
import '../Cards/style.css'

class Cards extends React.Component {
  render() {
    const { title, price, thumbnail } = this.props.result
    return (
      <div className='cardWrap'>
        <img className='image' src={thumbnail}/>
        <p className='title'>{title}</p>
        <p className='price'>${price}</p> 
      </div>
    )
  }
}

export default Cards;