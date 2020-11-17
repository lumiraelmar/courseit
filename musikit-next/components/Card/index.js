// import './style.scss'
import styles from '../../styles/Card.module.scss'
import TokenContext from '../../contexts/tokenContext';
import Link from 'next/link'
import {useContext} from 'react'

function Card({album}) {
  const token = useContext(TokenContext)
  return (
    <Link href={`/${album.type}s/${album.id}/`}>
      <div className={styles.albumWrapper}>
        <img src={album.images[0].url} className={styles.img}/>
        <h3 className={styles.name}>{album.name}</h3>
      </div>
    </Link>
  );
}

export default Card;