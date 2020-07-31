import React from 'react';
import Form from '../../components/Form';
import Carrito from '../../components/Carrito';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import './style.scss';

class App extends React.Component {
  render() {
    return(
      <div className='checkoutWrapper'>
        <Link to='/'>Back</Link>
        <h1 className='checkoutTitle'>Checkout</h1>
        <div className='checkoutWrapper'>
          <Form />
          <Carrito />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
