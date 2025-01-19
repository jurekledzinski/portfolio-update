import styles from './Icon.module.css';
import { classNames } from '@/helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProps } from './types';

export const Icon = ({ className, icon }: IconProps) => {
  return (
    <span className={classNames(styles.icon, className!)}>
      <FontAwesomeIcon icon={icon} />
    </span>
  );
};
