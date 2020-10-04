import React from 'react';
import { connect } from 'react-redux';
import { addCounter } from './store';

import './App.css';

class App extends React.Component {

  handleClick() {
    const { dispatch } = this.props;
    dispatch(addCounter())
    console.log('buenas')
  }

  render() {
    return (
      <div className="App">
        <p>el valor del counter es: {this.props.counter}</p>
        <button onClick={() => this.handleClick()}>+1</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps)(App);
