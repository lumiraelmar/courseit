import React from 'react';
import '../Button/style.css'

class Button extends React.Component {
  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.handleClick()}>{this.props.button}</button>
      </React.Fragment>
    );
  }
}

export default Button;