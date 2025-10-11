import { forwardRef } from 'react';
import { ModalBaseProps } from './types';

export const ModalBase = forwardRef<HTMLDivElement, ModalBaseProps>(
  ({ children, className }, ref) => {
    return (
      <div className={className} ref={ref}>
        {children}
      </div>
    );
  }
);

ModalBase.displayName = 'ModalBase';
