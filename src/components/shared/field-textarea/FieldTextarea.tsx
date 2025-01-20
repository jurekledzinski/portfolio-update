import styles from './FieldTextarea.module.css';
import { classNames } from '@/helpers';
import { Fieldset } from '../fieldset';
import { FieldTextareaProps } from './types';
import { Label } from '../label';
import { Textarea } from '../textarea';
import { forwardRef, Ref } from 'react';

export const FieldTextarea = forwardRef<
  HTMLTextAreaElement,
  FieldTextareaProps
>(
  (
    {
      children,
      classNameField,
      classNameTextarea,
      classNameLabel,
      label,
      name,
      placeholder,
      ...rest
    },
    ref: Ref<HTMLTextAreaElement>
  ) => {
    return (
      <Fieldset className={classNames(styles.fieldset, classNameField!)}>
        {label && (
          <Label className={classNames(classNameLabel!)} htmlFor={name}>
            {label}
          </Label>
        )}
        {children ?? (
          <Textarea
            {...rest}
            className={classNames(styles.input, classNameTextarea!)}
            name={name}
            placeholder={placeholder}
            ref={ref}
          />
        )}
      </Fieldset>
    );
  }
);
