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
          stylesButton.buttonDownload,
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
          stylesButton.buttonRedirect,
          styles.buttonIntroduction
        )}
        onClick={() => onRedirectGithub()}
      >
        <a
          className={styles.link}
          href="https://github.com/jurekledzinski"
          target="_blank"
        >
          <Icon icon={faSquareGithub} />
        </a>
      </Button>
      <Button
        className={classNames(
          stylesButton.buttonRedirect,
          styles.buttonIntroduction
        )}
        onClick={() => onRedirectLinkedin()}
      >
        <a
          className={styles.link}
          href="https://www.linkedin.com/in/j
urek-ledzinski"
          target="_blank"
        >
          <Icon icon={faLinkedin} />
        </a>
      </Button>
    </div>
  );
};
