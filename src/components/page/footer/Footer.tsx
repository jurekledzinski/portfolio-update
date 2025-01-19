import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>All rights reserved © {new Date().getFullYear()}</p>
    </footer>
  );
};
