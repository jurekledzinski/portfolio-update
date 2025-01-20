import { useEffect } from 'react';

type UseResetFormProps = {
  isPending: boolean;
  isSuccess: boolean;
  isSubmitSuccess: boolean;
  onSuccess: () => void;
  isReset?: boolean;
};

export const useResetForm = ({
  isPending,
  isSuccess,
  isSubmitSuccess,
  onSuccess,
  isReset,
}: UseResetFormProps) => {
  useEffect(() => {
    if (isSubmitSuccess && !isPending && isSuccess) {
      if (isReset) {
        onSuccess();
      }
    }
  }, [isPending, isReset, isSubmitSuccess, isSuccess, onSuccess]);
};
