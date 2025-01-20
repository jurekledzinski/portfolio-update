import styles from './Button.module.css';
import { classNames } from '@/helpers';
import { ButtonProps } from './types';

export const Button = ({
  children,
  className,
  disabled,
  form,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={classNames(styles.button, className!)}
      disabled={disabled}
      {...(form && { form })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
