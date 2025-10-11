import { modalBodyClassNames } from '@/components';
import { ModalBodyProps } from './types';

export const ModalBody = ({ children }: ModalBodyProps) => {
  const classes = modalBodyClassNames();

  return <div className={classes.body}>{children}</div>;
};
