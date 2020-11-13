import { useState, useEffect } from 'react'

function Cat() {
  const [img, setImg] = useState('');

  useEffect(() => {
    fetchData()
  },[])

  async function fetchData() {
    const data = await fetch('https://api.thecatapi.com/v1/images/search')
    const json = await data.json()
    setImg(json[0].url)
  }

  return (
    <img src={img} />
  );
}

export default Cat;