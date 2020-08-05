import React from 'react';
import '../Carousel/style.scss'
import Slider from 'react-slick';
import Cards from '../Cards'
import data from '../../data/courflix.json'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.settings = {
      slidesToShow: 4,
      slidesToScroll: 1,
      swipeToSlide: true,
      variableWidth: true,
      accessibility: true,
      speed: 400,
      rows: 1
    }
  }

  
  render() {
    return (
      <div className='carouselWrapper'>
        <span class="carouselTitle" id='series'>Series</span>
        <Slider {...this.settings}>
          {data[0].series.map((serie, key) => {
            return (
              <Cards item={serie} key={key}/>
            )
          })}
        </Slider>
        <span class="carouselTitle" id='series'>Peliculas</span>
        <Slider {...this.settings}>
          {data[0].movies.map((movie, key) => {
            return (
              <Cards item={movie} key={key}/>
            )
          })}
        </Slider>
        <span class="carouselTitle" id='recientes'>Agregadas recientemente</span>
        <Slider {...this.settings}>
          {data[0].recommended.map((serie, key) => {
            return (
              <Cards item={serie} key={key}/>
            )
          })}
        </Slider>
      </div>
    )
  }
}

export default Carousel;