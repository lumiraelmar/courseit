import React from 'react';
import Navbar from '../../components/Navbar/index';
import Hero from '../../components/Hero/index';
import Carousel from '../../components/Carousel';
import '../SelectedSeries/style.scss';
import '../../reset.css';
import logo from '../../assets/courflixlogo.png'
import portadaSerie from '../../assets/breakingbad04.png'



class App extends React.Component {


  render() {

    const infoSerie = 
      {
        coincidence: '95% de coincidencia',
        year: 'BLACK SUMMER',
        age: '16+',
        seasons: '5 temporadas',
        description: 'Un profesor de Química de secundaria con cáncer terminal se asocia a un exestudiante para asegurar el futuro de su familia al fabricar y vender metanfetamina.'
      }

    return (
      <div>
        <Navbar logo={logo}/>
        <Hero infoSerie={infoSerie} img={portadaSerie}/>
        <Carousel />
      </div>
    )
  }
}

export default App;