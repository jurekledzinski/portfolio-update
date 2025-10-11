import { Button, modalFooterClassNames } from '@/components';
import { ModalFooterProps } from './types';

export const ModalFooter = ({
  cancelText,
  confirmText,
  isPending,
  form,
  onCancel,
  onConfirm,
  type,
  color,
}: ModalFooterProps) => {
  const classes = modalFooterClassNames();

  return (
    <footer className={classes.footer}>
      <Button
        label={cancelText!}
        variant="outlined"
        color="secondary"
        onClick={onCancel}
        size="size-md"
      />

      <Button
        color={color}
        form={form}
        isLoading={isPending}
        label={confirmText}
        onClick={onConfirm}
        size="size-md"
        type={type}
        variant="contained"
      />
    </footer>
  );
};
