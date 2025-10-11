import { Alert, Fieldset, Input, Label, Message } from '@/components';
import { ContactFormProps } from './types';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

export const ContactForm = ({
  isError,
  methods,
  onSubmit,
}: ContactFormProps) => {
  const { formState } = methods;
  const { errors } = formState;

  return (
    <form onSubmit={onSubmit} id="contact">
      <Fieldset>
        <Label>Name</Label>
        <Input
          {...methods.register('name', {
            required: { message: 'Name is required', value: true },
          })}
          as="input"
          autoComplete="username"
          placeholder="Name"
          type="text"
        />
      </Fieldset>

      {errors.name && <Message>{errors.name.message}</Message>}

      <Fieldset>
        <Label>Email</Label>
        <Input
          {...methods.register('email', {
            required: { message: 'Email is required', value: true },
            pattern: {
              message: 'Email is invalid',
              value: /\S+@\S+\.\S+/,
            },
          })}
          as="input"
          autoComplete="username"
          placeholder="Email"
          type="text"
        />
      </Fieldset>

      {errors.email && <Message>{errors.email.message}</Message>}

      <Fieldset>
        <Label>Message</Label>
        <Input
          rows={5}
          cols={3}
          {...methods.register('message', {
            required: { message: 'Message is required', value: true },
            minLength: { message: 'Message is too short', value: 10 },
          })}
          as="textarea"
          placeholder="Message"
        />
      </Fieldset>

      {errors.message && <Message>{errors.message.message}</Message>}

      {isError && (
        <Alert
          color="negative"
          icon={faTriangleExclamation}
          message="Something went wrong, please try later"
          fullWidth
        />
      )}
    </form>
  );
};
