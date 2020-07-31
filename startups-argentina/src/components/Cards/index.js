import React from 'react';
import Card from '../Card';
import '../Cards/style.css';
import { Link } from 'react-router-dom';

class Cards extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: []
    }
  }

  componentDidMount() {

    const items = {...localStorage}
    const itemsArray = Object.values(items)
    const data = []
    itemsArray.map(item => data.push(JSON.parse(item)))

    /* const startups = localStorage.getItem('startups');
    if (startups) {
      const data = JSON.parse(Startups);
      this.setState({
      cards: data
    })
    }
    */

    this.setState({
      cards: data
    })
  }

  render() {
    const { cards } = this.state
    const { filter } = this.props
    console.log(1000, cards);
    return (
      <div className='cardsWrapper'>
        {cards.map((card, key) => {
          return (
            <React.Fragment>
            {card.name.toLowerCase().includes(filter.toLowerCase()) && (
              <Link to={`/startups/${card.name.toLowerCase()}`}>
                <Card 
                  key={key} 
                  img={card.logo} 
                  name={card.name} 
                  description={card.desc}/>
              </Link>
            )}   
            </React.Fragment>
          )
        })}
      </div>
    )
  }
}

export default Cards;