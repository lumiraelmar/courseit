// import './style.scss'
import styles from '../../styles/Card.module.scss'

function Card({album}) {
  return (
    <div className={styles.albumWrapper}>
      <img src={album.images[0].url} className={styles.img}/>
      <h3 className={styles.name}>{album.name}</h3>
    </div>
  );
}

export default Card;