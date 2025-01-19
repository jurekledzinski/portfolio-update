import styles from './Button.module.css';
import { classNames } from '@/helpers';
import { ButtonProps } from './types';

export const Button = ({
  children,
  className,
  disabled,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={classNames(styles.button, className!)}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
