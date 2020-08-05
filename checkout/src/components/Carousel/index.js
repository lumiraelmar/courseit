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

  handleClick(product) {
    //ERA TAN FACIL
    //traer info de localStorage
    const stringifiedCarrito = localStorage.getItem('carrito')
    //si hay info en localStorage
    if (stringifiedCarrito) {
      //convertir a json
      const parsedCarrito = JSON.parse(stringifiedCarrito);
      //agregar producto a json
      parsedCarrito.push(product)
      //convertir a string
      const newCarrito = JSON.stringify(parsedCarrito)
      //guardar en localStorage
      localStorage.setItem('carrito', newCarrito)
    } else {
      //si no hay info agarrar producto
      const parsedCarrito = [product]
      //convertir producto a string
      const newCarrito = JSON.stringify(parsedCarrito)
      //guardar producto
      localStorage.setItem('carrito', newCarrito)
    }
    //ir a la ruta /checkout
    this.props.history.push('/checkout')
  }
  

  render() {
    const { products } = this.state
    return(
      <div className='wrapper'>
        <Slider {...this.settings}>
            {products.map((product, key) => {
            return(
                <div key={key} className='productWrapper' onClick={() => this.handleClick(product)}>
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