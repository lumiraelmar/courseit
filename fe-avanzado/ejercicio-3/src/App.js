import React, {useState, useEffect} from 'react';
import Image from './components/Image'

function App() {
  const [data, setData] = useState([])
  
  async function fetchData() {
    const getData = await fetch('https://api.thecatapi.com/v1/images/search');
    const getJson = await getData.json();
    setData(getJson[0])
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
    <Image url={data.url} />
    </>
  );
}

export default App;
