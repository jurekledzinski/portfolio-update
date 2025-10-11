import styles from './Header.module.css';
import { ResponseSuccess, sendContactMessage } from '@/actions';
import { showErrorToast, showSuccessToast } from '@/helpers';
import { useContactForm } from '@/hooks';
import { useMutation } from '@tanstack/react-query';
import {
  Button,
  ContactForm,
  ContactFormInputs,
  Modal,
  useControlModal,
} from '@/components';

export const Header = () => {
  const { onClose, onOpen, isOpen } = useControlModal();

  const mutation = useMutation<ResponseSuccess, Error, ContactFormInputs>({
    mutationFn: async (body) => await sendContactMessage(body),
    onSuccess: () => showSuccessToast('Message sent successfully'),
    onError: () => showErrorToast('Message failed to send. Please try later'),
  });

  const { methodsContact, onSubmitContact } = useContactForm({
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
    onSubmit: (body) => mutation.mutate(body),
  });

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h3 className={styles.logo}>
          <span>Port</span>
          <span>folio</span>
        </h3>
        <Button
          color="primary"
          label="Contact"
          onClick={onOpen}
          radius="radius-xs"
          variant="contained"
        />
        <Modal
          color="primary"
          confirmText="Send"
          confirmType="submit"
          form="contact"
          isPending={mutation.isPending}
          isSuccess={mutation.isSuccess}
          onCancel={() => {
            onClose();
            methodsContact.reset();
          }}
          onSuccess={() => mutation.reset()}
          onClose={onClose}
          open={isOpen}
          portal={true}
          title="Contact"
        >
          <ContactForm
            isError={false}
            methods={methodsContact}
            onSubmit={onSubmitContact}
          />
        </Modal>
      </nav>
    </header>
  );
};
