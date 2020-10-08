import React from 'react';
import { connect } from 'react-redux';
import { addInputValue } from '../../store'

class Input extends React.Component {
 handleChange(e) {
    const { dispatch } = this.props;
    dispatch(addInputValue(e.target.value))
  }

  render() {
    return (
      <>
        <input type='text' onChange={(e) => this.handleChange(e)} value={this.props.inputValue}/>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    inputValue: state.inputValue
  }
}

export default connect(mapStateToProps)(Input);