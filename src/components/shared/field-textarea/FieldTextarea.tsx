import { Fieldset } from '../fieldset';
import { FieldTextareaProps } from './types';
import { forwardRef, Ref } from 'react';
import { getClassNamesFieldTextarea } from './utils';
import { Label } from '../label';
import { Textarea } from '../textarea';

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
    const classes = getClassNamesFieldTextarea(
      classNameField,
      classNameLabel,
      classNameTextarea
    );

    return (
      <Fieldset className={classes.fieldset}>
        {label && (
          <Label className={classes.label} htmlFor={name}>
            {label}
          </Label>
        )}
        {children ?? (
          <Textarea
            {...rest}
            className={classes.textarea}
            name={name}
            placeholder={placeholder}
            ref={ref}
          />
        )}
      </Fieldset>
    );
  }
);
