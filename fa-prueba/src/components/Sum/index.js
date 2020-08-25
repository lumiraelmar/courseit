import React from 'react';

class Sum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 0,
      num2: 0,
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
    const { num1, num2 } = this.state

    this.setState({
      result: parseInt(num1) + parseInt(num2)
    })
  }
  render() {
    const { result } = this.state
    return (
      <>
       <input name='num1' type='number' onChange={(e) => this.handleChange(e)}></input>
       <input name='num2' type='number' onChange={(e) => this.handleChange(e)}></input>
       <button onClick={() => this.handleClick()}>Sumar</button>
       <p>La suma es: {result}</p>
      </>
    )
  }
}

export default Sum