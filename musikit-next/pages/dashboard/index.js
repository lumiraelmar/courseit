import styles from "./Dashboard.module.scss";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Carousel from "../../components/Carousel";
import axios from "axios";
import SpotifyPlayer from "react-spotify-web-playback";
//Libreria para chequear browser y dispositivo ya que el reproductor no es compatible con todos
import { isBrowser, isChrome, isFirefox, isEdge, isIE } from "react-device-detect";

export default function Dashboard() {
  const [albums, setAlbums] = useState([]);
  const [popPunkAlbums, setPopPunkAlbums] = useState([]);
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [userInfo, setUserInfo] = useState([]);

  const router = useRouter();
  const [fullHash] = router.asPath.split("&");
  const [, accessToken] = fullHash.split("=");

  useEffect(() => {
    fetchData("https://api.spotify.com/v1/me/albums", setAlbums);
    fetchData(
      "https://api.spotify.com/v1/search?q=taylor&20swift&type=album",
      setPopPunkAlbums
    );
    fetchData("https://api.spotify.com/v1/me/player/recently-played", setRecentlyPlayed);
    fetchData("https://api.spotify.com/v1/me/playlists/", setPlaylists);
    fetchData("https://api.spotify.com/v1/me/", setUserInfo);
  }, []);

  async function fetchData(url, setter) {
    const data = await axios.get(url, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    setter(data.data);

    const stringifiedToken = JSON.stringify(accessToken);
    localStorage.setItem("token", stringifiedToken);
  }

  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.mainWrapper}>
        <Sidebar />
        {albums.items && <Carousel title="Saved Albums" albums={albums.items} />}
        {popPunkAlbums.albums && (
          <Carousel title="Taylor Swift" albums={popPunkAlbums.albums.items} />
        )}
        {recentlyPlayed.items && (
          <Carousel title="Recently Played" albums={recentlyPlayed.items} />
        )}
        {playlists && <Carousel title="Playlists" albums={playlists.items} />}
      </div>
      {/* {(isChrome || isFirefox || isIE || isEdge) && isBrowser && recentlyPlayed.items && (
        <div className={styles.player}>
          <SpotifyPlayer
            token={accessToken}
            uris={recentlyPlayed.items[0].track.uri}
            autoPlay="false"
            play="false"
            styles={{
              bgColor: "pink",
              color: "#fafafa",
              sliderColor: "#fafafa",
              trackArtistColor: "#fafafa",
              trackNameColor: "#fafafa",
              height: 70,
            }}
          />
        </div>
      )} */}
      {/* <Player token={accessToken} /> */}
    </div>
  );
}
