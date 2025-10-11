import styles from './HomePage.module.css';
import { Container } from '@/components';
import { Footer, Header, HeroSection, ProjectsSection } from './components';

export const HomePage = () => {
  return (
    <>
      <Header />
      <Container as="main" className={styles.main} maxWidth="mw-md" p="p-md">
        <HeroSection />
        <ProjectsSection />
      </Container>
      <Footer />
    </>
  );
};
