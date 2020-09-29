import React from 'react';
import '../Card/style.css';


class Card extends React.Component {
  render() {
    const { img, name, desc } = this.props
    return (
      <div className='cardWrapper' >
        <img className='img' src={img}></img>
        <div className='infoWrapper'>
          <p className='title'>{name}</p>
          <p className='description'>{desc}</p>
        </div>
      </div>
    )
  }
}

export default Card;