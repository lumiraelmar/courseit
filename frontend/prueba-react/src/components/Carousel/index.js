import React from 'react'
import './style.css'
import InnerCarousel from '../InnerCarousel'
import Title from '../Title'

class Carousel extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Title content={this.props.titulo}
        />
        <InnerCarousel items={this.props.items}/>
      </React.Fragment>
    )
  }
}

export default Carousel