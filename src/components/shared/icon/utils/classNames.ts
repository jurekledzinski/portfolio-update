import styles from '../Icon.module.css';
import { classNames } from '@/helpers';
import { IconProps } from '../types';

export const getClassIcon = (
  className?: string,
  color?: IconProps['color']
) => {
  return classNames(styles.icon, styles[color ?? ''], className ?? '');
};
