import { ButtonGroup } from '@/components/shared/button-group';
import { IconButton } from '@/components/shared/icon-button';
import { SliderNavigationProps } from './types';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

export const SliderNavigation = ({
  disabledNext,
  disabledPrev,
  onClickNext,
  onClickPrev,
}: SliderNavigationProps) => {
  return (
    <ButtonGroup aligment="aligment-center" spacing="normal" orientation="row">
      <IconButton
        color="primary"
        disabled={disabledPrev}
        icon={[faChevronLeft]}
        onClick={onClickPrev}
        radius="radius-xs"
        size="size-md"
        target="_blank"
        variant="contained"
      />

      <IconButton
        color="primary"
        disabled={disabledNext}
        icon={[faChevronRight]}
        onClick={onClickNext}
        radius="radius-xs"
        size="size-md"
        target="_blank"
        variant="contained"
      />
    </ButtonGroup>
  );
};
