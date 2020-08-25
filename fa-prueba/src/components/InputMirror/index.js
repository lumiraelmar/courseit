import React from 'react';

class InputMirror extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input1: '',
      input2: '',
      result: false
    }
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleClick() {
    const { result } = this.state
    this.setState({
      result: !result
    })
  }

  render() {
    const { result } = this.state
    return (
      <>
        <input name='input1' type='text' onChange={(e) => this.handleChange(e)}></input>
        <input name='input2' type='text' onChange={(e) => this.handleChange(e)}></input>
        <button onClick={() => this.handleClick()}>Buenas</button>
        {result && (
          <>
            <p>{this.state.input1}</p>
            <span>{this.state.input2}</span>
          </>
        )}
      </>
    )
  }
}

export default InputMirror