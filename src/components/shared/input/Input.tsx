import styles from './Input.module.css';
import { classNames } from '@/helpers';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { MergeProps, UnionElements } from './types';

export const Input = forwardRef<UnionElements, MergeProps>(
  ({ as = 'input', className, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const txtRef = useRef<HTMLTextAreaElement>(null);

    useImperativeHandle(ref, () => inputRef.current || txtRef.current!, []);

    if (as === 'textarea' && 'cols' in props) {
      return (
        <textarea
          className={classNames(styles.textarea, className!)}
          id={props.name}
          ref={txtRef}
          {...props}
        />
      );
    }

    if (as === 'input' && 'type' in props) {
      return (
        <input
          className={classNames(styles.input, className!)}
          id={props.name}
          ref={inputRef}
          {...props}
        />
      );
    }

    return null;
  }
);
