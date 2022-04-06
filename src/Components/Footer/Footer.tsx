import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.footerName}>
          <a
            href='https://github.com/alizadeh-m/citd-test-challenge'
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
export { Footer };
