import styles from './Header.module.css';
// import { stylesButton } from '@/components/shared';
import { Button } from '@/components/shared';

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h3 className={styles.logo}>Portfolio</h3>
        <Button>Contact</Button>
      </nav>
    </header>
  );
};
