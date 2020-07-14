import React from 'react';
import Card from '../Card';
import '../Cards/style.css';

class Cards extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [
        {
          img: 'https://pbs.twimg.com/profile_images/1259719811296309249/um6CLRiM_400x400.jpg',
          name: 'Courseit',
          description: 'Description'
        },
        {
          img: 'https://pbs.twimg.com/profile_images/1052208764726730753/s5bagDr__400x400.jpg',
          name: 'Endeva',
          description: 'Blablabla'
        }
      ]
    }
  }
  render() {
    const { cards } = this.state
    const { filter } = this.props
    return (
      <div className='cardsWrapper'>
        {cards.map((card, key) => {
          return (
            <React.Fragment>
            {card.name.toLowerCase().includes(filter.toLowerCase()) && (
              <Card key={key} img={card.img} name={card.name} description={card.description}/>
            )}   
            </React.Fragment>
          )
        })}
      </div>
    )
  }
}

export default Cards;