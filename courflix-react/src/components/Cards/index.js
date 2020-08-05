import React from 'react';
import '../Cards/style.scss'
import { Link } from 'react-router-dom';

class Cards extends React.Component {
  render() {
    const { img, title } = this.props.item
    return (
      <div className='carouselImgWrapper'>
        <Link to={`/content/${title.toLowerCase()}`}>
          <img className='carouselImg' src={img} />
        </Link>
      </div>
    )
  }
}

export default Cards;