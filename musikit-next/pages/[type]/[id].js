import styles from "./Album.module.scss";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Album({ album, id }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const getToken = localStorage.getItem("token");
    const parsedToken = JSON.parse(getToken);
    const data = await axios.get(`https://api.spotify.com/v1/${album}/${id}`, {
      headers: { Authorization: `Bearer ${parsedToken}` },
    });
    setData(data.data.tracks.items);
  }

  console.log(data);
  return (
    data && (
      <div>
        {data.map((track, key) => {
          return track.track ? <p key={key}>{track.track.name}</p> : <p key={key}>{track.name}</p>;
        })}
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
