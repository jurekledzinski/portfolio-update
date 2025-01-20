export type ModalDeleteProps = {
  classButton?: string;
  cancel?: string;
  confirm?: string;
  children?: React.ReactNode;
  form?: string;
  isPending?: boolean;
  isSuccess?: boolean;
  triggerButton: string;
  onSuccess?: () => void;
  onCancel?: () => void;
  title: string;
};
