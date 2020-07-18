import React from 'react';
import Navbar from './components/Navbar/index';
import Hero from './components/Hero/index';
import Carousel from './components/Carousel/index';
import './App.scss';
import './reset.css';
import logo from './assets/courflixlogo.png'

class App extends React.Component {


  render() {

    const infoSerie = 
      {
        subtitle: 'Original de Courflix',
        title: 'BLACK SUMMER',
        season: 'Ve la temporada 1',
        description: 'Una ansiada luna de miel. Un asesinato terrible. Varios sospechosos. Si sobreviven, seran unas vacaciones de ensueño'
      }

    return (
      <div>
        <Navbar logo={logo}/>
        <Hero infoSerie={infoSerie}/>
        <Carousel />
      </div>
    )
  }
}

export default App;
