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
    // traerlo de local storage
    const productsLS = {...localStorage}
    const itemsArray = Object.values(productsLS)
    const parsedArray = []

    let totalPrice = 0

    itemsArray.map(item => {
      const parsedItem = JSON.parse(item)
      parsedArray.push(parsedItem)
      
      totalPrice = totalPrice + parsedItem[0].price
    })


    this.setState({
      products: parsedArray,
      totalPrice: totalPrice
    })
  }

  handleCallback(action, price) {
    const { totalPrice } = this.state
    const newTotalPrice = action == 'less' ? totalPrice - price : totalPrice + price

    this.setState({
      totalPrice: newTotalPrice
    })
    //const { products } = this.state
    //const totalPrice = [];
    //products.map((product) => {
      //if (product.id == id) {
        //totalPrice.push(price)
      //}
      //})
      //console.log(price)
    //this.setState({
      //totalCarrito: (totalPrice.reduce((a, b) => a + b))
    //})
  }

  render() {
    const { products, totalPrice } = this.state
    return(
      <div className='carritoWrapper'>
        {products.map((product, key) => {
          return(
            <Product key={key} product={product[0]} handleCallback={(action, price) => this.handleCallback(action, price)}/>
          )
        })}
        <Price totalPrice={totalPrice}/>
      </div>
    )
  }
}

export default Carrito;
