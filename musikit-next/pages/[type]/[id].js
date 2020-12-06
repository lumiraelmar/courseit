import styles from "./Album.module.scss";
import axios from "axios";
import { useState, useEffect } from "react";
// import Player from "../../components/Player";
import SpotifyPlayer from "react-spotify-web-playback";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
//Libreria para chequear browser y dispositivo ya que el reproductor no es compatible con todos
import { isBrowser, isChrome, isFirefox, isEdge, isIE } from "react-device-detect";

export default function Album({ album, id }) {
  const [data, setData] = useState([]);
  const [token, setToken] = useState("");
  const [song, setSong] = useState([]);
  const [newList, setNewList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function handleClick(track) {
    const index = song.indexOf(track);
    const cut = song.slice(index);
    setNewList(cut);
  }

  async function fetchData() {
    const trackList = [];
    const getToken = localStorage.getItem("token");
    const parsedToken = JSON.parse(getToken);
    setToken(parsedToken);
    const data = await axios.get(`https://api.spotify.com/v1/${album}/${id}`, {
      headers: { Authorization: `Bearer ${parsedToken}` },
    });
    const info = data.data.tracks.items;
    setData(info);

    info.map((track) => {
      if (track.track) {
        trackList.push(track.track.uri);
      } else {
        trackList.push(track.uri);
      }
    });
    setSong(trackList);
  }

  return (
    data && (
      <div className={styles.wrapper}>
        <Navbar />
        <div className={styles.mainWrapper}>
          <Sidebar />
          <div>
            {data.map((track, key) => {
              return track.track ? (
                <p
                  className={styles.song}
                  key={key}
                  onClick={() => handleClick(track.track.uri)}
                >
                  {track.track.name}
                </p>
              ) : (
                <p className={styles.song} key={key} onClick={() => handleClick(track.uri)}>
                  {track.name}
                </p>
              );
            })}
          </div>
        </div>
        {(isChrome || isFirefox || isIE || isEdge) && isBrowser && token && (
          <div className={styles.player}>
            <SpotifyPlayer
              token={token}
              uris={newList != 0 ? newList : song}
              play="true"
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
        )}
      </div>
    )
  );
}

export async function getServerSideProps({ params }) {
  return {
    props: {
      album: params.type,
      id: params.id,
    },
  };
}
