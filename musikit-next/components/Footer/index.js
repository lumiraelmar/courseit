import styles from "./Footer.module.scss";

function Footer() {
  return (
    <>
      <hr className="line" />
      <p className="footer">
        Made with ♥ by{" "}
        <a href="https://github.com/lumiraelmar" className="footerLink">
          Lu Miraelmar
        </a>
      </p>
    </>
  );
}

export default Footer;
