import { EmblaCarouselType } from 'embla-carousel';
import { useCallback, useEffect, useState } from 'react';

type UseControlSlider = {
  emblaApi: EmblaCarouselType | undefined;
};

export const useControlSlider = ({ emblaApi }: UseControlSlider) => {
  const [disabledPrev, setDisabledPrev] = useState(true);
  const [disabledNext, setDisabledNext] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const onClickPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onClickNext = useCallback(() => {
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

  const onSettle = useCallback(() => {
    if (!emblaApi) return;
    const selected = emblaApi.selectedScrollSnap();
    setSelectedIndex(selected);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('settle', onSettle);
  }, [emblaApi, onSettle]);

  return {
    disabledPrev,
    disabledNext,
    onClickPrev,
    onClickNext,
    selectedIndex,
  };
};
