// import './style.scss'
import styles from "./Card.module.scss";
import Link from "next/link";

function Card({ album, img }) {
  return (
    <Link href={`/${album.type}s/${album.id}/`}>
      <div className={styles.albumWrapper}>
        <img src={img} className={styles.img} />
        <h3 className={styles.name}>{album.name}</h3>
      </div>
    </Link>
  );
}

export default Card;
