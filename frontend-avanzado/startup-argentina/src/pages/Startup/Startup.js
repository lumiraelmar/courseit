import React, { useEffect, useState } from 'react';

function Home() {
  const [info, setInfo] = useState([])

  useEffect(() => {
    hola()
  }, [])

  function hola() {
    const stringifiedStartup = localStorage.getItem('startup');
    const parsedStartup = JSON.parse(stringifiedStartup)
    setInfo(parsedStartup)

  }

  return (
    <div>
      <img src={info.logo} />
      <h2>{info.name}</h2>
      <p>{info.desc}</p>
    </div>
  );
}

export default Home;