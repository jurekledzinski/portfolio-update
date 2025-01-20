'use client';
import { Button } from '../button';

import { Modal } from '@/components/shared';
import { ModalContent } from '@/components/shared';
import { ModalDeleteProps } from './types';
import { useEffect, useRef, useState } from 'react';

export const ModalContact = ({
  classButton,
  cancel = 'Cancel',
  confirm = 'Submit',
  children,
  form,
  triggerButton,
  title,
  isPending,
  isSuccess,
  onCancel,
  onSuccess,
}: ModalDeleteProps) => {
  const nodeRef = useRef(null);
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [showModal, setModal] = useState(false);

  useEffect(() => {
    if (showModal && isSuccess && !isPending) {
      if (onSuccess) onSuccess();
      setModal(false);
    }
  }, [isPending, isSuccess, showModal, onSuccess]);

  return (
    <>
      <Button className={classButton} onClick={() => setModal(true)}>
        {triggerButton}
      </Button>
      <Modal
        showBackdrop={showBackdrop}
        ref={nodeRef}
        showModal={showModal}
        onEnter={() => setShowBackdrop(true)}
        onExit={() => setShowBackdrop(false)}
      >
        <ModalContent
          title={title}
          cancelText={cancel}
          confirmText={confirm}
          children={children}
          form={form}
          isPending={isPending}
          onCancel={() => {
            if (onCancel) onCancel();
            setModal(false);
          }}
          onClose={() => {
            if (onCancel) onCancel();
            setModal(false);
          }}
          onConfirm={() => {
            // setModal(false)
          }}
        />
      </Modal>
    </>
  );
};
