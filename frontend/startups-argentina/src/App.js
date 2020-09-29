import React from 'react';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Footer from './components/Footer';
import './App.css';
import './reset.css';

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

  componentDidMount() {
    console.log(localStorage)
  }

  render() {
    const { inputValue } = this.state
    return (
      <div className='wrapper'>
        <Navbar showAutocomplete={true} handleCallback={(inputValue) => this.handleCallback(inputValue)}/>
        <Cards filter={inputValue}/>
        <Footer />
      </div>
    )
  }
}

export default App;