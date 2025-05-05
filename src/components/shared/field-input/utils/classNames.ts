import styles from '../FieldInput.module.css';
import { classNames } from '@/helpers';

export const getClassNamesFieldInput = (
  classNameField?: string,
  classNameLabel?: string,
  classNameInput?: string
) => {
  return {
    fieldset: classNames(styles.fieldset, classNameField!),
    label: classNames(classNameLabel!),
    input: classNames(styles.input, classNameInput!),
  };
};
