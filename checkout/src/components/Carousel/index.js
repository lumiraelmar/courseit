import React from 'react';
import './style.scss';
import Slider from 'react-slick';
import Products from '../../data/products.json';
import { withRouter } from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);

      this.state = {
        products: Products
      }

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

  handleClick(e) {
    //codigo robado de sole
    const {products} = this.state;
    const {innerText} = e.target.parentNode.childNodes[1];
    console.log(innerText)

    const filtered = products.filter(product => {
      return(product.name === innerText)
    })

    localStorage.setItem(filtered[0].name, JSON.stringify(filtered))

    this.props.history.push('/checkout')
  }
  

  render() {
    const { products } = this.state
    console.log(this.props)
    return(
      <div className='wrapper'>
        <Slider {...this.settings}>
            {products.map((product, key) => {
            return(
                <div key={key} className='productWrapper' onClick={(e) => this.handleClick(e)}>
                  <img className='imgSlider' src={product.img} />
                  <p className='productName'>{product.name}</p>
                  <p className='productPrice'>{product.price}</p>
                </div>
            )})}
        </Slider>
      </div>
    )
  }
}

export default withRouter (Home);