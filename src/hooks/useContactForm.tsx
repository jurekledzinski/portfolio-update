import { ContactFormInputs } from '@/components/shared';
import { useForm } from 'react-hook-form';
import { useResetForm } from './useResetForm';

type UseContactFormProps = {
  onSuccess: () => void;
};

export const useContactForm = ({ onSuccess }: UseContactFormProps) => {
  const methods = useForm<ContactFormInputs>({
    defaultValues: {
      email: '',
      message: '',
      name: '',
    },
  });

  const onSubmit = (data: ContactFormInputs) => {
    console.log('Submit data', data);
  };

  useResetForm({
    isPending: false,
    isSuccess: false,
    methods,
    defaultValues: { email: '', message: '', name: '' },
    onSuccess,
  });

  return {
    methodsContact: methods,
    onSubmitContact: methods.handleSubmit(onSubmit),
  };
};
