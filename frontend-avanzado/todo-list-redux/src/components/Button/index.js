import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../store'

class Button extends React.Component {
  handleClick() {
    const { dispatch } = this.props;
    dispatch(addItem())
  }

  render() {
    return (
      <>
        <button onClick={() => this.handleClick()}>Click</button>
      </>
    );
  }
}


export default connect()(Button);