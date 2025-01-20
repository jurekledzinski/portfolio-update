import { ContactFormInputs } from '@/components/shared';
import { useForm } from 'react-hook-form';
import { useResetForm } from './useResetForm';

type UseContactFormProps = {
  isPending: boolean;
  isSuccess: boolean;
  onSubmit: (body: ContactFormInputs) => void;
};

export const useContactForm = ({
  isPending,
  isSuccess,
  onSubmit,
}: UseContactFormProps) => {
  const methods = useForm<ContactFormInputs>({
    defaultValues: {
      email: '',
      message: '',
      name: '',
    },
  });

  useResetForm({
    isPending,
    isSuccess,
    isSubmitSuccess: methods.formState.isSubmitSuccessful,
    onSuccess: () => {
      console.log('RESET SUKCES');
      methods.reset({ email: '', message: '', name: '' });
    },
  });

  return {
    methodsContact: methods,
    onSubmitContact: methods.handleSubmit(onSubmit),
  };
};
