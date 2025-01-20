import styles from './Header.module.css';
import { ResponseSuccess, sendContactMessage } from '@/actions';
import { showErrorToast, showSuccessToast } from '@/helpers';
import { useContactForm } from '@/hooks';
import { useMutation } from '@tanstack/react-query';
import {
  ContactForm,
  ContactFormInputs,
  ModalContact,
} from '@/components/shared';

export const Header = () => {
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

  console.log('mutation', mutation);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h3 className={styles.logo}>
          <span>Port</span>
          <span>folio</span>
        </h3>
        <ModalContact
          form="contact"
          triggerButton="Contact"
          title="Contact"
          isPending={mutation.isPending}
          isSuccess={mutation.isSuccess}
          onCancel={() => methodsContact.reset()}
        >
          <ContactForm
            isError={false}
            methods={methodsContact}
            onSubmit={onSubmitContact}
          />
        </ModalContact>
      </nav>
    </header>
  );
};
