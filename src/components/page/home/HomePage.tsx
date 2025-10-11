import styles from './HomePage.module.css';
import { Box, Container } from '@/components';
import {
  ContainerSliders,
  Footer,
  Header,
  Introduction,
  SocialLinks,
} from './components';

export const HomePage = () => {
  return (
    <>
      <Header />
      <Container as="main" className={styles.main} maxWidth="mw-md" p="p-md">
        <Box className={styles.box}>
          <Introduction />
          <SocialLinks />
        </Box>
        <Box className={styles.box}>
          <header className={styles.header}>
            <h3 className={styles.subTitle}>Projects</h3>
          </header>
          <ContainerSliders />
        </Box>
      </Container>
      <Footer />
    </>
  );
};
