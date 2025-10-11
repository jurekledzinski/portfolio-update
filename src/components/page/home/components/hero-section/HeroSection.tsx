import styles from '../../HomePage.module.css';
import { Box, Introduction, SocialLinks } from '@/components';

export const HeroSection = () => (
  <Box className={styles.box}>
    <Introduction />
    <SocialLinks />
  </Box>
);
