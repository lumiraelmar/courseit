import React from 'react';
import Product from '../Product';
import Price from '../Price/';
import './style.scss'

class Carrito extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      totalPrice: 0
    }
  }

  componentDidMount() {
    let totalPrice = 0
    // traer localStorage
    const stringifiedProducts = localStorage.getItem('carrito')
    //si hay info en localStorage
    if (stringifiedProducts) {
      //parsear info
      const products = JSON.parse(stringifiedProducts)
      //map de los productos de localStorage
      products.map(product => {
        totalPrice = totalPrice + product.price
      })

      this.setState({
        products: products,
        totalPrice: totalPrice
      })
    }
  }

  handleCallback(action, price) {
    const { totalPrice } = this.state
    const newTotalPrice = action == 'less' ? totalPrice - price : totalPrice + price

    this.setState({
      totalPrice: newTotalPrice
    })
  }

  deleteCallback(id) {
    const { products, totalPrice } = this.state
    let newTotalPrice = totalPrice;

    const filteredProducts = products.filter((product) => {
      if (product.id == id) {
        newTotalPrice = newTotalPrice - product.price;
      }
      return product.id != id;
    })

    const stringifiedCarrito = localStorage.getItem('carrito')
    const parsedCarrito = JSON.parse(stringifiedCarrito);

    //para borrar 1 producto del carrito 
    for (let i = 0; i < parsedCarrito.length; i++) {
      if (parsedCarrito[i].id == id) {
        parsedCarrito.splice(i, 1)
        const newCarrito = JSON.stringify(parsedCarrito)
        localStorage.setItem('carrito', newCarrito)
      }
    }
    
    this.setState({
      products: filteredProducts,
      totalPrice: newTotalPrice
    })
  }

  render() {
    const { products, totalPrice } = this.state
    return(
      <div className='carritoWrapper'>
        {products.map((product, key) => {
          return(
            <Product key={key} product={product} handleCallback={(action, price) => this.handleCallback(action, price)} deleteCallback={(id) => this.deleteCallback(id)}/>
          )
        })}
        <Price totalPrice={totalPrice}/>
      </div>
    )
  }
}

export default Carrito;