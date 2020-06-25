import React from 'react'
import './style.css'
import Card from '../Card'

class InnerCarousel extends React.Component {
  constructor(props) {
    super(props);
    console.log('Soy el InnerCarousel')
  }
  render() {
    const { items } = this.props
    return (
      <React.Fragment>
        <div className="cards-wrapper">
          {items.map((item, key) => {
            return (
              <Card key={key} item={item}/>
            )
          })}
        </div> 
      </React.Fragment>
    )
  }
}

export default InnerCarousel