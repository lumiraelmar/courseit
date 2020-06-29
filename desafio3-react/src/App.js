import React from 'react';
import InputWrapper from './components/InputWrapper';
import Button from './components/Button';
import './App.css';

class App extends React.Component {
  render() {
    
    return (
      <div className='wrapper'>
        <InputWrapper />
        <Button button='Add'/>
      </div>
    );
  }
}

export default App;
