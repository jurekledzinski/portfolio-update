import styles from './Slider.module.css';
import useEmblaCarousel from 'embla-carousel-react';
import { Button, stylesButton } from '@/components/shared';
import { classNames } from '@/helpers';
import { Icon } from '../icon';
import { SliderProps } from './types';
import { useControlSlider } from '@/hooks';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

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

export const Slider = ({ options }: SliderProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { disabledNext, disabledPrev, onNextButtonClick, onPrevButtonClick } =
    useControlSlider({ emblaApi });

  return (
    <div className={styles.embla}>
      <div className={styles.emblaViewport} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {slides.map((slide) => (
            <div className={styles.emblaSlide} key={slide.id}>
              <img src={slide.src} alt="Project image" />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.buttonGroup}>
        <>
          <Button
            className={classNames(
              stylesButton.buttonConfirm,
              styles.sliderButton
            )}
            disabled={disabledPrev}
            onClick={onPrevButtonClick}
          >
            <Icon icon={faChevronLeft} />
          </Button>
          <Button
            className={classNames(
              stylesButton.buttonConfirm,
              styles.sliderButton
            )}
            disabled={disabledNext}
            onClick={onNextButtonClick}
          >
            <Icon icon={faChevronRight} />
          </Button>
        </>
      </div>
    </div>
  );
};
