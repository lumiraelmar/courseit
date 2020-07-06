import React from 'react';
import Cards from '../Cards/index'
import '../InnerCarousel/style.css'

class CardsWrapper extends React.Component {

  render() {
    
    return (
      <div className='cardsWrapper'>
        {this.props.results.map((result, key) => {
          return (
            <Cards key={key} result={result}/>
          )
        })}
      </div>
    )
  }
}
export default CardsWrapper;