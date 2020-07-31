import React from 'react';
import './style.scss';
import Carousel from '../../components/Carousel';
import Navbar from '../../components/Navbar';


class Home extends React.Component {
  
  render() {
    return(
      <div className='wrapper'>
        <Navbar />
        <Carousel />
        <Carousel />
        <Carousel />
      </div>
    )
  }
}

export default Home;