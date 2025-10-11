import styles from './SocialLinks.module.css';
import { ButtonGroup, IconButton } from '@/components';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';

export const SocialLinks = () => {
  return (
    <ButtonGroup
      justify="justify-start"
      mt="mt-sm"
      orientation="row"
      spacing="normal"
    >
      <IconButton
        color="warning"
        download={import.meta.env.VITE_FILE_NAME_DOWNLOAD}
        href={import.meta.env.VITE_FILE_URL}
        icon={[faFile]}
        size="size-md"
        radius="radius-xs"
        variant="contained"
      />
      <IconButton
        className={styles.iconButton}
        color="secondary"
        href={import.meta.env.VITE_GITHUB_URL}
        icon={[faSquareGithub]}
        target="_blank"
        size="size-md"
        radius="radius-xs"
        variant="contained"
      />
      <IconButton
        className={styles.iconButton}
        color="secondary"
        href={import.meta.env.VITE_LINKEDIN_URL}
        icon={[faLinkedin]}
        target="_blank"
        size="size-md"
        radius="radius-xs"
        variant="contained"
      />
    </ButtonGroup>
  );
};
