import React from 'react';
import './App.css';

class App extends React.Component {
  //settear estado inicial
  constructor(props) {
    super(props)
    console.log('Soy un constructor')
    this.state = {
      catImage: null
    }
  }

  async componentDidMount() {
    console.log('Soy un componentDidMount');
    const getCat = await fetch('https://api.thecatapi.com/v1/images/search');
    const getCatJson = await getCat.json();

    console.log(getCatJson);

    this.setState({
      catImage: getCatJson[0].url
    })

  }


  render() {
    console.log('Soy un render')
    return (
      <div className="App">
        {this.state.catImage ? (
          <img src={this.state.catImage}/>
        ) : (
          <p>Cargando</p>
        )}

        {!this.state.catImage && (
          <p>No hay ninguna imagen de gato</p>
        )}
      </div>
    );
  }
}

export default App;
