import React from 'react';
import Input from '../Input/index';
import '../Input/style.css';

class InputWrapper extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Input inputPlaceholder='add number'/>
        <Input inputPlaceholder='add number'/>
      </React.Fragment>
    );
  }
}

export default InputWrapper;