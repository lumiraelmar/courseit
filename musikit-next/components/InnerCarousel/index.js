// import './style.scss'
import Card from '../Card'
import styles from '../../styles/InnerCarousel.module.scss'

function InnerCarousel({albums}) {
  return (
    <div className={styles.carouselWrapper}>
      {albums &&
        albums.map((album, key) => {
          return (
            <Card album={album.album} key={key}/>
          )
        })
      }
    </div>
  );
}

export default InnerCarousel;