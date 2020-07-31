import React from 'react';
import '../Card/style.css';


class Card extends React.Component {
  render() {
    const { img, name, description } = this.props
    return (
      <div className='cardWrapper' >
        <img className='img' src={img}></img>
        <div className='infoWrapper'>
          <p className='title'>{name}</p>
          <p className='description'>{description}</p>
        </div>
      </div>
    )
  }
}

export default Card;