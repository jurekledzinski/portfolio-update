import styles from './SliderActions.module.css';
import { Button } from '@/components/shared/button';
import { ButtonGroup } from '@/components/shared/button-group';
import { DataActions, SliderActionsProps } from './types';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { IconButton } from '@/components/shared/icon-button';

export const SliderActions = <T extends DataActions>({
  currentIndex,
  data,
  onModalOpen,
}: SliderActionsProps<T>) => {
  return (
    <ButtonGroup aligment="aligment-center" spacing="normal">
      <IconButton
        className={styles.iconButton}
        color="secondary"
        href={data[currentIndex]?.live}
        icon={[faGlobe]}
        radius="radius-xs"
        size="size-md"
        target="_blank"
        variant="contained"
      />
      <IconButton
        className={styles.iconButton}
        color="secondary"
        href={data[currentIndex]?.repository}
        icon={[faSquareGithub]}
        radius="radius-xs"
        size="size-md"
        target="_blank"
        variant="contained"
      />
      <Button
        className={styles.button}
        color="secondary"
        label="Screenshots"
        radius="radius-xs"
        variant="contained"
        onClick={onModalOpen}
      />
    </ButtonGroup>
  );
};
