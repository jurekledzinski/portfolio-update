import styles from './IntroductionButtonGroup.module.css';
import { Button, Icon, stylesButton } from '@/components/shared';
import { classNames, showSuccessToast } from '@/helpers';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { IntroductionButtonGroupProps } from './types';

export const IntroductionButtonGroup = ({
  onDownload,
  onRedirectGithub,
  onRedirectLinkedin,
}: IntroductionButtonGroupProps) => {
  return (
    <div className={classNames(stylesButton.buttonGroup, styles.buttonGroup)}>
      <Button
        className={classNames(
          stylesButton.buttonConfirm,
          styles.buttonIntroduction
        )}
        onClick={() => {
          onDownload();
          showSuccessToast('Cv downloaded successfully');
        }}
      >
        <a
          className={styles.link}
          href="/files/cv.pdf"
          download="cv_jurekledzinski.pdf"
        >
          <Icon icon={faFile} />
        </a>
      </Button>
      <Button
        className={classNames(
          stylesButton.buttonConfirm,
          styles.buttonIntroduction
        )}
        onClick={() => onRedirectGithub()}
      >
        <a className={styles.link} href="https://github.com/jurekledzinski">
          <Icon icon={faSquareGithub} />
        </a>
      </Button>
      <Button
        className={classNames(
          stylesButton.buttonConfirm,
          styles.buttonIntroduction
        )}
        onClick={() => onRedirectLinkedin()}
      >
        <a className={styles.link} href="#">
          <Icon icon={faLinkedin} />
        </a>
      </Button>
    </div>
  );
};
