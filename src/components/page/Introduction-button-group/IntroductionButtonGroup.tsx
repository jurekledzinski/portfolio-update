import { Button, Icon, stylesButton } from '@/components/shared';
import { classNames } from '@/helpers';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import styles from './IntroductionButtonGroup.module.css';

export const IntroductionButtonGroup = () => {
  return (
    <div className={classNames(stylesButton.buttonGroup, styles.buttonGroup)}>
      <Button
        className={classNames(
          stylesButton.buttonConfirm,
          stylesButton.buttonMinWidth,
          styles.buttonIntroduction
        )}
      >
        <Icon icon={faFile} />
      </Button>
      <Button
        className={classNames(
          stylesButton.buttonConfirm,
          stylesButton.buttonMinWidth,
          styles.buttonIntroduction
        )}
      >
        <Icon icon={faSquareGithub} />
      </Button>
      <Button
        className={classNames(
          stylesButton.buttonConfirm,
          stylesButton.buttonMinWidth,
          styles.buttonIntroduction
        )}
      >
        <Icon icon={faLinkedin} />
      </Button>
    </div>
  );
};
