import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: {}
    }
  }

  async componentDidMount() {
    const data = await fetch('https://api.github.com/users/juanigallo');
    const json = await data.json();

    this.setState({
      data: json
    });
  }

  handleClick() {
    this.setState({
      data: {}
    })
  }

  render() {
    return (
      <>
        <p>{this.state.data.login}</p>
        <button onClick={() => this.handleClick()}>Resetear</button>
      </>
    )
  }
}

export default App;
