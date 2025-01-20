import styles from './Header.module.css';
import { ContactForm, ModalContact } from '@/components/shared';
import { useContactForm } from '@/hooks';

export const Header = () => {
  const { methodsContact, onSubmitContact } = useContactForm({
    onSuccess: () => {},
  });

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h3 className={styles.logo}>Portfolio</h3>
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
