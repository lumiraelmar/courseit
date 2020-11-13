import {useState, useEffect} from 'react';
import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Carousel from '../../components/Carousel'
import Player from '../../components/Player'

function Dashboard() {
  const [data, setData] = useState([]);
  const router = useRouter()
  const [fullHash] = router.asPath.split('&');
  const [, accessToken] = fullHash.split('=');

  useEffect(()=> {
    fetchData()
  }, [])

  async function fetchData() {
    const data = await fetch('https://api.spotify.com/v1/me/albums', {
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
      <Navbar />
      <Sidebar />
      <Carousel title='Un Carousel' albums={data.items}/>
      <Carousel title='Un segundo Carousel' albums={data.items}/>
      <Carousel title='Un tercer Carousel' albums={data.items}/>
      <Player />
    </div>
  );
}

export default Dashboard;

//https://api.spotify.com/v1/me/albums
//https://api.spotify.com/v1/artists/06HL4z0CvFAxyc27GXpf02/albums