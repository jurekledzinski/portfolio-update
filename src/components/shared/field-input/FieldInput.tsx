import { FieldInputProps } from './types';
import { Fieldset } from '../fieldset';
import { forwardRef, Ref } from 'react';
import { getClassNamesFieldInput } from './utils';
import { Input } from '../input';
import { Label } from '../label';

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
    const classes = getClassNamesFieldInput(
      classNameField,
      classNameLabel,
      classNameInput
    );

    return (
      <Fieldset className={classes.fieldset}>
        {label && (
          <Label className={classes.label} htmlFor={name}>
            {label}
          </Label>
        )}
        {children ?? (
          <Input
            {...rest}
            ref={ref}
            className={classes.input}
            name={name}
            placeholder={placeholder}
            type={type}
          />
        )}
      </Fieldset>
    );
  }
);
