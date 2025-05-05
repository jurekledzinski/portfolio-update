'use client';
import styles from './Backdrop.module.css';
import { BackdropProps } from './types';
import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';

export const Backdrop = ({ onClick, show }: BackdropProps) => {
  const nodeRef = useRef(null);

  return (
    <>
      <CSSTransition
        nodeRef={nodeRef}
        in={show}
        timeout={300}
        classNames={{
          ...styles,
        }}
        unmountOnExit
        appear
      >
        <div
          ref={nodeRef}
          className={styles.backdropElement}
          onClick={onClick}
        />
      </CSSTransition>
    </>
  );
};
