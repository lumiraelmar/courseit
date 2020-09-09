import React, {useState} from 'react';
import Navbar from './components/Navbar';
import List from './components/List';
import './App.css';

function App() {
  const [searchParam, setSearchParam] = useState('')

  function handleSearch(searchParam) {
    setSearchParam(searchParam)
    console.log(searchParam)
  }

  return (
    <div className="App">
      <Navbar handleCallback={handleSearch}/>
      <List searchParam={searchParam}/>
    </div>
  );
}

export default App;
