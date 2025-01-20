import styles from './Input.module.css';
import { classNames } from '@/helpers';
import { InputProps } from './types';
import { forwardRef, Ref } from 'react';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref: Ref<HTMLInputElement>) => (
    <input
      {...props}
      className={classNames(styles.input, className!)}
      id={props.name}
      ref={ref}
    />
  )
);
