import { classNames } from '@/helpers';
import styles from '../components/slide-description/SlideDescription.module.css';

export const getClassNamesSlideDescription = (isActive: boolean) => {
  return {
    wrapper: isActive
      ? classNames(styles.wrapper, styles.active)
      : styles.wrapper,
    innerWrapper: styles.innerWrapper,
    title: styles.title,
    text: styles.text,
    list: styles.list,
    listItem: styles.listItem,
    icon: styles.icon,
  };
};
