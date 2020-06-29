import React from 'react';
import '../Input/style.css';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    }
  }

handleChange(e) {
  console.log(e.target.value);
  this.setState({
    inputValue: e.target.value
  })
}

  render() {
    return (
      <React.Fragment>
        <input onChange={(e) => this.handleChange(e)} type='text' placeholder={this.props.inputPlaceholder}></input>
      </React.Fragment>
    );
  }
}

export default Input;