import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Products from './components/Products'
import Checkout from './components/Checkout'
import { AlgoProvider } from './contexts/AlgoContext';

function App() {
  const [toggle, setToggle] = useState(false)
  const [productsList, setProductsList] = useState([])
  const [totalPrice, setTotalPrice] = useState(0);

  function handleToggle(toggle) {
    setToggle(toggle)
  }

  function handleProduct(data) {
    const prices = [];
    setProductsList([...productsList, data]);

    [...productsList, data].map((product) => {
      prices.push(product.price)
    }) 
    if (prices.length > 0) {
      const suma = prices.reduce(function(a, b) {
        return parseInt(a) + parseInt(b); 
      })
      setTotalPrice(suma)
    }
  }

  const contextCarrito = {
    productsList: productsList,
    totalPrice: totalPrice,
    handleToggle: handleToggle,
    handleProduct: handleProduct,
    toggle: toggle
  }

  return (
    <AlgoProvider value={contextCarrito}>
      <Navbar title='Carrito' button='Ver Carrito'/>
      <Products />
      {toggle && 
        <Checkout /> 
      }
    </AlgoProvider>
  );
}

export default App;
