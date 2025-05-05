import styles from '../IntroductionButtonGroup.module.css';
import { classNames } from '@/helpers';
import { stylesButton } from '@/components/shared';

export const getClassNamesIntroductionButtonGroup = () => {
  return {
    buttonGroup: classNames(stylesButton.buttonGroup, styles.buttonGroup),
    buttonDownload: classNames(
      stylesButton.buttonDownload,
      styles.buttonIntroduction
    ),
    buttonRedirect: classNames(
      stylesButton.buttonRedirect,
      styles.buttonIntroduction
    ),
    link: styles.link,
  };
};
