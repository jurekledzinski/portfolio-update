import { MouseEventHandler } from 'react';

export type ModalContentProps = {
  title: string;
  cancelText?: string;
  confirmText?: string;
  form?: string;
  isPending?: boolean;
  children?: React.ReactNode;
  onClose?: MouseEventHandler<HTMLButtonElement>;
  onCancel?: MouseEventHandler<HTMLButtonElement>;
  onConfirm?: MouseEventHandler<HTMLButtonElement>;
};
