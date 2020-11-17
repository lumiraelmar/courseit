import {useState, useEffect} from 'react';
import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Carousel from '../../components/Carousel'
import Player from '../../components/Player'
import axios from 'axios';
import { TokenProvider } from '../../contexts/tokenContext'

export default function Dashboard() {
  const [albums, setAlbums] = useState([]);
  const [popPunkAlbums, setPopPunkAlbums] = useState([]);
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [userInfo, setUserInfo] = useState([]);

  const router = useRouter()
  const [fullHash] = router.asPath.split('&');
  const [, accessToken] = fullHash.split('=');

  useEffect(()=> {
    fetchData('https://api.spotify.com/v1/me/albums', setAlbums)
    fetchData('https://api.spotify.com/v1/search?q=taylor&20swift&type=album', setPopPunkAlbums)
    fetchData('https://api.spotify.com/v1/me/player/recently-played', setRecentlyPlayed)
    fetchData('https://api.spotify.com/v1/me/playlists/', setPlaylists)
    fetchData('https://api.spotify.com/v1/me/', setUserInfo)
  }, [])

  async function fetchData(url, setter) {
    const data = await axios.get(url, { 
      headers: { 'Authorization': `Bearer ${accessToken}` } }
    )
    setter(data.data)

    const stringifiedToken = JSON.stringify(accessToken);
    localStorage.setItem('token', stringifiedToken)
  }

  return (
    <TokenProvider value={accessToken} >
    <div className="App">
      <Navbar />
      <Sidebar />
      {albums.items && 
        <Carousel title='Saved Albums' albums={albums.items}/>
      }
      {popPunkAlbums.albums &&
        <Carousel title='Taylor Swift' albums={popPunkAlbums.albums.items}/>
      }
      {recentlyPlayed.data &&
        <Carousel title='Recently Played' albums={recentlyPlayed.data.items}/>
      }
      {playlists &&
        <Carousel title='Playlists' albums={playlists.items}/>
      }
      <Player />
    </div>
    </TokenProvider>
  );
}

