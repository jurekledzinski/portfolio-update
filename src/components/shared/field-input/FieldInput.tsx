import styles from './FieldInput.module.css';
import { classNames } from '@/helpers';
import { FieldInputProps } from './types';
import { Fieldset } from '../fieldset';
import { Input } from '../input';
import { Label } from '../label';
import { forwardRef, Ref } from 'react';

export const FieldInput = forwardRef<HTMLInputElement, FieldInputProps>(
  (
    {
      children,
      classNameField,
      classNameInput,
      classNameLabel,
      label,
      name,
      type,
      placeholder,
      ...rest
    },
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <Fieldset className={classNames(styles.fieldset, classNameField!)}>
        {label && (
          <Label className={classNames(classNameLabel!)} htmlFor={name}>
            {label}
          </Label>
        )}
        {children ?? (
          <Input
            {...rest}
            ref={ref}
            className={classNames(classNameInput!, styles.input)}
            name={name}
            placeholder={placeholder}
            type={type}
          />
        )}
      </Fieldset>
    );
  }
);
