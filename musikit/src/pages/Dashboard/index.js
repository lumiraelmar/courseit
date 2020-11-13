import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';

function Dashboard() {
  const [data, setData] = useState([]);
  const location = useLocation();
  const [fullHash] = location.hash.split('&');
  const [, accessToken] = fullHash.split('=');


  useEffect(()=> {
    fetchData()
  }, [])

  async function fetchData() {
    const data = await fetch('https://api.spotify.com/v1/me/player/recently-played', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    const dataJson = await data.json();
    setData(dataJson)
  }

  console.log(data)
  return (
    <div className="App">

    </div>
  );
}

export default Dashboard;

//https://api.spotify.com/v1/me/albums
//https://api.spotify.com/v1/artists/06HL4z0CvFAxyc27GXpf02/albums