import styles from '../../HomePage.module.css';
import { Box, ContainerSliders } from '@/components';

export const ProjectsSection = () => {
  return (
    <Box className={styles.box}>
      <header className={styles.header}>
        <h3 className={styles.subTitle}>Projects</h3>
      </header>
      <ContainerSliders />
    </Box>
  );
};
