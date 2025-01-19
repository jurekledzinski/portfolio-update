import styles from './Slider.module.css';
import useEmblaCarousel from 'embla-carousel-react';

import { SliderProps } from './types';
import { useControlSlider } from '@/hooks';

export const Slider = ({ options }: SliderProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { disabledNext, disabledPrev, onNextButtonClick, onPrevButtonClick } =
    useControlSlider({ emblaApi });

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.emblaContainer}>
        {[1, 2].map((slide) => (
          <div className={styles.emblaSlide} key={slide}>
            Slide {slide}
          </div>
        ))}
      </div>
      <div className={styles.buttonGroup}>
        <button
          className={styles.emblaButton}
          disabled={disabledPrev}
          onClick={onPrevButtonClick}
        >
          Prev
        </button>
        <button
          className={styles.emblaButton}
          disabled={disabledNext}
          onClick={onNextButtonClick}
        >
          Next
        </button>
      </div>
    </div>
  );
};
