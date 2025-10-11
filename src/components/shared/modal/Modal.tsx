import { Backdrop } from '@/components';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { ModalBase, ModalLayout } from './components';
import { modalClassNames } from './utils';
import { ModalProps } from './types';
import { useModalEffectStatus } from './hooks';
import { useRef, useState } from 'react';

export const Modal = ({
  children,
  confirmType,
  open = false,
  isPending = false,
  isSuccess,
  layout = 'structure',
  onFailed,
  onSuccess,
  portal,
  ...props
}: ModalProps) => {
  const nodeRef = useRef(null);
  const [showBackdrop, setShowBackdrop] = useState(false);

  useModalEffectStatus({
    open,
    isPending,
    isSuccess,
    onFailed,
    onSuccess,
  });

  const classes = modalClassNames();

  const modalElement = (
    <CSSTransition
      in={open}
      nodeRef={nodeRef}
      timeout={300}
      classNames={classes.modal}
      unmountOnExit
      onEnter={() => setShowBackdrop(true)}
      onExited={() => setShowBackdrop(false)}
    >
      {layout === 'clean' ? (
        <ModalBase className={classes.modalCleanElement} ref={nodeRef}>
          {children}
        </ModalBase>
      ) : (
        <ModalLayout
          className={classes.modalElement}
          isPending={isPending}
          ref={nodeRef}
          type={confirmType}
          {...props}
        >
          {children}
        </ModalLayout>
      )}
    </CSSTransition>
  );

  if (portal) {
    return (
      <>
        <Backdrop open={showBackdrop} portal={portal} zIndex={200} />
        {createPortal(modalElement, document.body)}
      </>
    );
  }

  return (
    <>
      <Backdrop open={showBackdrop} portal={portal} zIndex={200} />
      {modalElement}
    </>
  );
};
