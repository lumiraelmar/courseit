import React, {useState} from 'react';
import {usePassword} from './hooks/password'
import { UserProvider } from './contexts/UserContext';
import Navbar from './components/Navbar'
import List from './components/List'
import './App.css';

function App() {
  const [isValid, handleChange] = usePassword(4);
  const [input, setInput] = useState('')
  function handleInput(inputLive) {
    setInput(inputLive)
  }

  const Data = {
    handleInput: handleInput,
    input: input
  }
  return (
    <UserProvider value={Data}>
      <div className="App">
        <Navbar />
        <List />
      </div>
      <input type='text' onChange={handleChange} />
      {isValid ? <p>contraseña valida</p> : <p>contraseña invalida</p>}
    </UserProvider>
  );
}

export default App;
