import React from 'react';
import Carousel from './components/Carousel/index'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      results: []
    }
  }
  handleChange(e) {
    const { value } = e.target
    this.setState({
      inputValue: value
    })
  }
  async handleClick() {
    const searchValue = this.state.inputValue
    const getML = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${searchValue}&limit=10`);
    const getMLJson = await getML.json();

    this.setState({
      results: getMLJson.results
    })
  }

  render() {
    return (
      <React.Fragment>
        <input type='text' onChange={(e) => this.handleChange(e)}/>
        <button onClick={() => this.handleClick()}>Buscar:</button>
        <Carousel results={this.state.results}/>
      </React.Fragment>
    )
  }
}


export default App;
