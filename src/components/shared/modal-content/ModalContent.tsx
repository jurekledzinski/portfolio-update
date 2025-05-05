import { Button } from '../button';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { getClassNamesModalContent } from './utils';
import { Icon } from '../icon';
import { Loader } from '../loader';
import { ModalContentProps } from './types';

export const ModalContent = ({
  cancelText,
  confirmText,
  form,
  title,
  children,
  isPending,
  onCancel,
  onClose,
  onConfirm,
}: ModalContentProps) => {
  const classes = getClassNamesModalContent();
  return (
    <>
      <header className={classes.header}>
        <h5 className={classes.title}>{title}</h5>
        <button className={classes.buttonModalClose} onClick={onClose}>
          <Icon className={classes.icon} icon={faXmark} />
        </button>
      </header>
      <div className={classes.body}>{children}</div>
      <footer className={classes.footer}>
        <button className={classes.buttonCancel} onClick={onCancel}>
          {cancelText}
        </button>
        <Button
          className={classes.buttonConfirm}
          disabled={isPending}
          form={form}
          onClick={onConfirm}
          type="submit"
        >
          <span>{confirmText}</span>
          {isPending && <Loader />}
        </Button>
      </footer>
    </>
  );
};
