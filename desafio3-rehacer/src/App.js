import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue1: 0,
      inputValue2: 0,
      result: 0
    }
  }

handleChange(e) {
  const { name, value } = e.target
  this.setState({
    [name]: value
  })
}

handleClick() {
  const { firstNum, secondNum } = this.state
  this.setState({
    result: parseInt(firstNum) + parseInt(secondNum)
  })
}

  render() {
    const { result } = this.state
    return (
      <React.Fragment>
        <input name='firstNum' onChange={(e) => this.handleChange(e)} type='text' placeholder='Add number'/>
        <input name='secondNum' onChange={(e) => this.handleChange(e)} type='text' placeholder='Add number'/>
        <button onClick={() => this.handleClick()}>Add</button>
        <p>Resultado: {result}</p>
      </React.Fragment>
    );
  }
}

export default App;
