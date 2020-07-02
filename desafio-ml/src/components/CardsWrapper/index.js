import React from 'react';
import Cards from '../Cards/index'
import '../CardsWrapper/style.css'

class CardsWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: []
    }
  }
  async componentDidMount() {
    const getML = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=pokemon&limit=10');
    const getMLJson = await getML.json();
    this.setState({
      results: getMLJson.results
    })
  }
  render() {
    return (
      <div className='cardsWrapper'>
        {this.state.results.map((result, key) => {
          return (
            <Cards key={key} result={result}/>
          )
        })}
      </div>
    )
  }
}

export default CardsWrapper;