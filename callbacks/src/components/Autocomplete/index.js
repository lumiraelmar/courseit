import React from 'react';
import '../Autocomplete/style.css';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }
  }
  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  handleClick() {
    this.props.handleCallback(this.state.value)
  }

  render() {
    return (
      <div className='wrapper'>
        <input onChange={(e) => this.handleChange(e)} type='text' />
        <button onClick={() => this.handleClick()}> Click me</button>
      </div>
    )
  }
}


export default Autocomplete;