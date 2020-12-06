import styles from "./Sidebar.module.scss";
import Router from "next/router";

function Sidebar() {
  function handleClick() {
    const getToken = localStorage.getItem("token");
    const parsedToken = JSON.parse(getToken);
    Router.push(`/dashboard#access_token=${parsedToken}`);
  }

  return (
    <div className={styles.wrapper}>
      <img
        className={styles.img}
        src="https://i.postimg.cc/X7H0yHXJ/spotify-Logo-White.png"
        width="200"
        onClick={handleClick}
      />
      <a className={styles.link} onClick={handleClick}>
        Inicio
      </a>
      <input className={styles.input} />
      <a className={styles.link} href="">
        Tu Biblioteca
      </a>
    </div>
  );
}

export default Sidebar;
