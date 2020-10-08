import React from 'react';
import Input from './components/Input'
import Button from './components/Button'
import List from './components/List'
import './App.css';
//import { useDispatch , useSelector, useStore } from 'react-redux';

function App() {
  //useDispatch reemplaza: connect() y this.props.dispatch;
  //useSelector reemplaza: connect() y mapStateToProps;

  return (
    <div className="App">
      <Input />
      <Button />
      <List />
    </div>
  );
}

export default App;
