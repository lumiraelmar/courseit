import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar'
import Image from './components/Image'
import Bio from './components/Bio'
import Projects from './components/Projects'
import { AlgoProvider } from './contexts/AlgoContext'
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [projects, setProjects] = useState([]);

  async function fetchData(url, setter) {
    const getData = await fetch(url);
    const getJson = await getData.json();
    setter(getJson);
  }

  useEffect(() => {
    fetchData('https://api.github.com/users/lumiraelmar', setData);
    fetchData('https://api.github.com/users/lumiraelmar/repos', setProjects);
  }, [])

  const info = {data: data, projects: projects}
  return (
    <div className='wrapper'>
      <AlgoProvider value={info}>
        <div className='infoWrapper'>
          <Navbar />
          <Image />
          <Bio />
        </div>
        <Projects />
      </AlgoProvider>
    </div>
  );
}

export default App;