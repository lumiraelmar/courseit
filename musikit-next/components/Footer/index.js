import styles from "./Footer.module.scss";

function Footer() {
  return (
    <>
      <p className={styles.footer}>
        Made with ♥ by{" "}
        <a href="https://github.com/lumiraelmar" className={styles.link}>
          Lu Miraelmar
        </a>
      </p>
    </>
  );
}

export default Footer;
