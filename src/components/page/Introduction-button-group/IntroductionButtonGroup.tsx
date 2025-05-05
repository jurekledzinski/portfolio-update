import { Button, Icon } from '@/components/shared';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { getClassNamesIntroductionButtonGroup } from './utils';

export const IntroductionButtonGroup = () => {
  const classes = getClassNamesIntroductionButtonGroup();

  return (
    <div className={classes.buttonGroup}>
      <Button className={classes.buttonDownload}>
        <a
          className={classes.link}
          href="/files/cv.pdf"
          download="cv_jurekledzinski.pdf"
        >
          <Icon icon={faFile} />
        </a>
      </Button>
      <Button className={classes.buttonRedirect}>
        <a
          className={classes.link}
          href="https://github.com/jurekledzinski"
          target="_blank"
        >
          <Icon icon={faSquareGithub} />
        </a>
      </Button>
      <Button className={classes.buttonRedirect}>
        <a
          className={classes.link}
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
