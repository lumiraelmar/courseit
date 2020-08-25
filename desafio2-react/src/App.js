import React from 'react';
import Header from './components/Navbar';
import CardsWrapper from '../src/components/CardsWrapper';
import Footer from '../src/components/Footer';
import '../src/App.css';

class App extends React.Component {
  render() {
    
    return (
      <div className='wrapper'>
        <Header title='STARTUP ARGENTINA' nombreLink='Agregar startup'/>
        <CardsWrapper />
        <Footer footer='Made with ♥ by ' link='https://github.com/lumiraelmar' linkName='Lu Miraelmar'/>
      </div>
    );
  }
}

export default App;
