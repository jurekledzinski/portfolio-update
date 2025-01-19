import { MouseEventHandler } from 'react';

export type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
