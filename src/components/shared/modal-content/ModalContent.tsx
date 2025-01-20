import styles from './ModalContent.module.css';
import { Button } from '../button';
import { classNames } from '@/helpers';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Loader } from '../loader';
import { ModalContentProps } from './types';
import { stylesButton } from '../button';
import { Icon } from '../icon';

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
  return (
    <>
      <header className={styles.header}>
        <h5 className={styles.title}>{title}</h5>
        <button className={stylesButton.buttonModalClose} onClick={onClose}>
          <Icon icon={faXmark} />
        </button>
      </header>
      <div className={styles.body}>{children}</div>
      <footer className={styles.footer}>
        <button
          className={classNames(stylesButton.button, stylesButton.buttonCancel)}
          onClick={onCancel}
        >
          {cancelText}
        </button>
        <Button
          className={classNames(
            stylesButton.button,
            stylesButton.buttonConfirm
          )}
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
