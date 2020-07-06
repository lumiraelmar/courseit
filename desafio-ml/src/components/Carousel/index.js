import React from 'react'
import InnerCarousel from '../InnerCarousel/index'
import Title from '../Title/index'
import '../Carousel/style.css'

class Carousel extends React.Component {

  render() {

    return (
      <div>
        <Title title='Tu busqueda'/>
        <InnerCarousel results={this.props.results}/>
      </div>
    )
  }
}

export default Carousel