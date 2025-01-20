export type ModalProps = {
  children?: React.ReactNode;
  onEnter?: () => void;
  onExit?: () => void;
  showBackdrop: boolean;
  showModal: boolean;
};
