import styles from './Modal.module.css';
import { forwardRef, Ref, useImperativeHandle, useRef } from 'react';
import { ModalProps } from './types';
import { CSSTransition } from 'react-transition-group';
import { Backdrop } from '../backdrop';

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    { children, onEnter, onExit, showBackdrop, showModal },
    ref: Ref<HTMLDivElement>
  ) => {
    const localRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => localRef.current!);

    return (
      <>
        <Backdrop show={showBackdrop} />
        <CSSTransition
          in={showModal}
          nodeRef={localRef}
          timeout={300}
          classNames={{
            enter: styles.modalEnter,
            enterActive: styles.modalEnterActive,
            exit: styles.modalExit,
            exitActive: styles.modalExitActive,
          }}
          unmountOnExit
          onEnter={onEnter}
          onExited={onExit}
        >
          <div className={styles.modalElement} ref={ref}>
            {children}
          </div>
        </CSSTransition>
      </>
    );
  }
);

Modal.displayName = 'Modal';
