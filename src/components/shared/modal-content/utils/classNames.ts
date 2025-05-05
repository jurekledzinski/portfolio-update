import stylesModalContent from '../ModalContent.module.css';
import { classNames } from '@/helpers';
import { stylesButton } from '../../button';

export const getClassNamesModalContent = () => {
  return {
    header: stylesModalContent.header,
    title: stylesModalContent.title,
    buttonModalClose: classNames(
      stylesButton.buttonModalClose,
      stylesModalContent.buttonIcon
    ),
    icon: stylesModalContent.icon,
    body: stylesModalContent.body,
    footer: stylesModalContent.footer,
    buttonCancel: classNames(stylesButton.button, stylesButton.buttonCancel),
    buttonConfirm: classNames(stylesButton.button, stylesButton.buttonConfirm),
  };
};
