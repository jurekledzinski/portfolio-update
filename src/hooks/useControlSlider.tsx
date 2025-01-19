import { EmblaCarouselType } from 'embla-carousel';
import { useCallback, useEffect, useState } from 'react';

type UseControlSlider = {
  emblaApi: EmblaCarouselType | undefined;
};

export const useControlSlider = ({ emblaApi }: UseControlSlider) => {
  const [disabledPrev, setDisabledPrev] = useState(true);
  const [disabledNext, setDisabledNext] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setDisabledPrev(!emblaApi.canScrollPrev());
    setDisabledNext(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onSelect]);

  return {
    disabledPrev,
    disabledNext,
    onPrevButtonClick,
    onNextButtonClick,
  };
};
