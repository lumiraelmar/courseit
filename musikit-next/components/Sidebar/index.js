import styles from "./Sidebar.module.scss";
import Router from "next/router";

function Sidebar() {
  function handleClick() {
    const getToken = localStorage.getItem("token");
    const parsedToken = JSON.parse(getToken);
    Router.push(`/dashboard#access_token=${parsedToken}`);
  }

  return (
    <div>
      <img
        src="https://i.postimg.cc/X7H0yHXJ/spotify-Logo-White.png"
        width="200"
        onClick={handleClick}
      />
      <a href="/">Inicio</a>
      <input />
      <a href="">Tu Biblioteca</a>
    </div>
  );
}

export default Sidebar;
