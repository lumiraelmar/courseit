import React from 'react';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Footer from './components/Footer';
import './App.css';
import './reset.css';
import { Link } from 'react-router-dom'

class App extends React.Component {
constructor(props) {
  super(props);

  this.state = {
    inputValue: ''
  }
}

  handleCallback(inputValue) {
    console.log(inputValue)
    this.setState({
      inputValue: inputValue
    })
  }

  render() {
    const { inputValue } = this.state
    return (
      <div className='wrapper'>
        <Navbar handleCallback={(inputValue) => this.handleCallback(inputValue)}/>
        <Cards filter={inputValue}/>
        <Footer />
        <Link to='/prueba'>Ir a prueba</Link>
      </div>
    )
  }
}

export default App;