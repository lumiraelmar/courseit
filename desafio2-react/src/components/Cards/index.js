import React from 'react';
import '../Cards/style.css'

class Cards extends React.Component {
  render() {
    const {image, title, description} = this.props.startup
    return (
      <React.Fragment>
        <div className='cardWrapper'>
          <img className='cardImage' src={image}></img>
          <div className='textWrapper'>
            <p className='cardTitle'>{title}</p>
            <p className='cardDescription'>{description}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Cards;