import styles from './Slider.module.css';
import useEmblaCarousel from 'embla-carousel-react';

import { SliderProps } from './types';
import { useControlSlider } from '@/hooks';

const slides = [
  {
    id: 1,
    src: 'images/shoppy-600.png',
  },
  {
    id: 2,
    src: 'images/news-600.png',
  },
];

// <img src="/images/example.jpg" alt="Example" />
export const Slider = ({ options }: SliderProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { disabledNext, disabledPrev, onNextButtonClick, onPrevButtonClick } =
    useControlSlider({ emblaApi });

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.emblaContainer}>
        {slides.map((slide) => (
          <div className={styles.emblaSlide} key={slide.id}>
            <img src={slide.src} alt="Project" />
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
