import Link from "next/link";
import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <Link href="">
          <li className={styles.item}>Destacados</li>
        </Link>
        <Link href="">
          <li className={styles.item}>Podcasts</li>
        </Link>
        <Link href="">
          <li className={styles.item}>Playlists</li>
        </Link>
        <Link href="">
          <li className={styles.item}>Descubrir</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
