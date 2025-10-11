import { ButtonHTMLAttributes, MouseEventHandler } from 'react';
import { Color } from '@/types';

export type ModalFooterProps = {
  confirmText: string;
  cancelText?: string;
  isPending?: boolean;
  form?: string;
  onCancel?: MouseEventHandler<HTMLButtonElement>;
  onConfirm?: MouseEventHandler<HTMLButtonElement>;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  color?: Color;
};
