import React from 'react';
import Cards from '../Cards';
import '../CardsWrapper/style.css'

class CardsWrapper extends React.Component {
  render() {
    const startups = [
      {
        image: 'https://images.unsplash.com/photo-1545231027-637d2f6210f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80',
        title: 'Courseit',
        description: 'Description'
      },
      {
        image: 'https://images.unsplash.com/photo-1505489435671-80a165c60816?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1431&q=80',
        title: 'Endeva',
        description: 'Blablabla'
      }
    ]
    return (
      <React.Fragment>
        <div className="cardsWrapper">
          {startups.map((startup, key) => {
            return (
              <Cards key={key} startup={startup} />
            )
          })}
        </div> 
      </React.Fragment>
    );
  }
}

export default CardsWrapper;