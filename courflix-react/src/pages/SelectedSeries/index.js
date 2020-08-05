import React from 'react';
import Navbar from '../../components/Navbar/index';
import Hero from '../../components/Hero/index';
import Carousel from '../../components/Carousel';
import '../SelectedSeries/style.scss';
import logo from '../../assets/courflix.png'
import data from '../../data/courflix.json'



class App extends React.Component {
  render() {


    return (
      <div>
        <Navbar logo={logo}/>
        <Hero style={{backgroundImage:`url(${data[0].series[0].heroImg})`}} />
        <div class="gradient"></div>
        <Carousel />
      </div>
    )
  }
}

export default App;