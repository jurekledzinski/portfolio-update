import styles from './Header.module.css';
import { ContactForm, ModalContact } from '@/components/shared';
import { useContactForm } from '@/hooks';
import { useMutation } from '@tanstack/react-query';

export const Header = () => {
  const mutation = useMutation({
    mutationFn: async () => {
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: 'Hello' }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const data = response.json();
      return data;
    },
    onSuccess: () => {},
  });

  const { methodsContact, onSubmitContact } = useContactForm({
    onSuccess: () => {
      // invoke toast
    },
  });

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h3 className={styles.logo}>
          <span>Port</span>
          <span>folio</span>
        </h3>
        <button
          onClick={() => {
            mutation.mutate();
          }}
        >
          Click
        </button>
        <ModalContact
          form="contact"
          triggerButton="Contact"
          title="Contact"
          isPending={false}
          isSuccess={false}
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
