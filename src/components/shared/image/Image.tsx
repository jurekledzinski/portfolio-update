import styles from './Image.module.css';
import { classNames } from '@/helpers';
import { ImageProps } from './types';

export const Image = ({ className, ...props }: ImageProps) => {
  return <img {...props} className={classNames(className, styles.image)} />;
};
