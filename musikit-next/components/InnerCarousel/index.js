// import './style.scss'
import Card from "../Card";
import styles from "./InnerCarousel.module.scss";

function InnerCarousel({ albums }) {
  return (
    <div className={styles.carouselWrapper}>
      {albums &&
        albums.map((album, key) => {
          return (
            <>
              {album.album ? (
                <Card album={album.album} img={album.album.images[0].url} key={key} />
              ) : album.track ? (
                <Card album={album.track} img={album.track.album.images[0].url} key={key} />
              ) : (
                <Card album={album} img={album.images[0].url} key={key} />
              )}
            </>
          );
        })}
    </div>
  );
}

export default InnerCarousel;
