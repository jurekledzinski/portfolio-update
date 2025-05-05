import styles from '../FieldTextarea.module.css';
import { classNames } from '@/helpers';

export const getClassNamesFieldTextarea = (
  classNameField?: string,
  classNameLabel?: string,
  classNameTextarea?: string
) => {
  return {
    fieldset: classNames(styles.fieldset, classNameField!),
    label: classNames(classNameLabel!),
    textarea: classNames(styles.input, classNameTextarea!),
  };
};
