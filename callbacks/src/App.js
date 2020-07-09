import React from 'react';
import Autocomplete from './components/Autocomplete';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      autocompleteValue: ''
    }
  }
  handleCallback(inputValue) {
    this.setState({
      autocompleteValue: inputValue
    })
  }
  
  render() {
    return (
      <div className='wrapper'>
        <Autocomplete handleCallback={(inputValue) => this.handleCallback(inputValue)} />
        <p>{this.state.autocompleteValue}</p>
      </div>
    )
  }
}


export default App;
