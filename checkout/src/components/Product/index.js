import React from 'react';
import './style.scss'

class Product extends React.Component {
  constructor(props){
    super(props);
    const { qty } = this.props.product
    this.state = {
      qty: qty
    }
  }

  //increment() {
  //  const { qty, price } = this.state
  //  this.setState({
  //    qty: qty + 1,
  //    newPrice: parseFloat(price * (qty + 1)).toFixed(2)
   // }, () => {this.props.handleCallback(this.state.id, (this.state.qty * this.props.price))})
  //}

  //decrement() {
  //  const { qty, price } = this.state
  //  if(this.state.qty < 2) {
  //    this.setState({
  //      qty: 1,
  //      newPrice: price
  //    })
  //  } else {
  //    this.setState({
  //      qty: qty - 1,
  //      newPrice: parseFloat(price * (qty - 1)).toFixed(2)

  //    }, () => {this.props.handleCallback(this.state.id, (this.state.qty * this.props.price))})
  //  }  
  //}

  handleClick(action) {
    const { price } = this.props.product
    const { qty } = this.state
    const newQty = action == 'less' ? qty - 1 : qty + 1

    if (newQty > 0) {
      this.props.handleCallback(action, price)
      
      this.setState({
        qty: newQty
      })
    }
  }
  

  render() {
    const { img, name, price } = this.props.product
    const { qty } = this.state
    return(
      <div className='checkoutProductWrapper'>
        <img src={img} className='productImg'></img>
        <div className='productInfo'>
          <p className='productName'>{name}</p>
          <p className='productPrice'>${parseFloat(price * qty).toFixed(2)}</p>
          <div className='quantityWrapper'>
            <button className='button' onClick={() => this.handleClick('less')}>-</button>
            <p className='productQuantity'>{qty}</p>
            <button className='button' onClick={() => this.handleClick('plus')}>+</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Product;
