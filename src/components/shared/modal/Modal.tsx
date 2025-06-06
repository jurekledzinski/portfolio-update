import styles from './Modal.module.css';
import { Backdrop } from '../backdrop';
import { CSSTransition } from 'react-transition-group';
import { forwardRef, Ref, useImperativeHandle, useRef } from 'react';
import { ModalProps } from './types';

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
            ...styles,
          }}
          unmountOnExit
          onEnter={onEnter}
          onExited={onExit}
        >
          <div className={styles.modalElement} ref={localRef}>
            {children}
          </div>
        </CSSTransition>
      </>
    );
  }
);

Modal.displayName = 'Modal';
