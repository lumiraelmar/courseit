import styles from "./Carousel.module.scss";
import InnerCarousel from "../InnerCarousel";

function Carousel({ title, albums }) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <InnerCarousel albums={albums} />
    </div>
  );
}

export default Carousel;
