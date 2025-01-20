import styles from './Textarea.module.css';
import { classNames } from '@/helpers';
import { TextareaProps } from './types';
import { forwardRef, Ref } from 'react';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref: Ref<HTMLTextAreaElement>) => (
    <textarea
      {...props}
      className={classNames(styles.textarea, className!)}
      id={props.name}
      ref={ref}
    />
  )
);
