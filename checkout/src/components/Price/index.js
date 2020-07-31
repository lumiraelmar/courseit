import React from 'react';
import './style.scss'

class Price extends React.Component {
  render() {
    const { totalPrice } = this.props
    return(
      <div className='priceWrapper'>
        <div className='shippingWrapper'>
          <p className='shipping'>Shipping</p>
          <p>$19</p>
        </div>
        <div className='totalWrapper'>
          <p className='totalPrice'>Total</p>
          <p>${parseFloat(totalPrice).toFixed(2)}</p>
        </div>
        
      </div>
    )
  }
}

export default Price;
