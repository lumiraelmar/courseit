import React, {useState} from 'react';
import { UserProvider } from './contexts/UserContext';
import Navbar from './components/Navbar'
import List from './components/List'
import './App.css';

function App() {
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
    </UserProvider>
  );
}

export default App;
