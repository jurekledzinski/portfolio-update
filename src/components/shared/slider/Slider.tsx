import styles from './Slider.module.css';
import useEmblaCarousel from 'embla-carousel-react';
import { Button, stylesButton } from '@/components/shared';
import { classNames } from '@/helpers';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { Icon } from '../icon';
import { sliderData } from '@/data';
import { SliderProps } from './types';
import { stylesLink } from '@/components/page';
import { useControlSlider } from '@/hooks';
import {
  faChevronLeft,
  faChevronRight,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';

export const Slider = ({ options }: SliderProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const currentIndex = (emblaApi && emblaApi.selectedScrollSnap()) ?? 0;

  const { disabledNext, disabledPrev, onNextButtonClick, onPrevButtonClick } =
    useControlSlider({ emblaApi });

  return (
    <div className={styles.embla}>
      <div className={styles.emblaViewport} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {sliderData.map((slide) => (
            <div className={styles.emblaSlide} key={slide.id}>
              <img src={slide.src} alt="Project image" />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.buttonGroups}>
        <div className={styles.buttonGroup}>
          <Button
            className={classNames(
              stylesButton.buttonConfirm,
              styles.redirectButton
            )}
          >
            <a
              className={stylesLink.link}
              href={sliderData[currentIndex].live}
              target="_blank"
            >
              <Icon icon={faGlobe} />
            </a>
          </Button>
          <Button
            className={classNames(
              stylesButton.buttonConfirm,
              styles.redirectButton
            )}
          >
            <a
              className={stylesLink.link}
              href={sliderData[currentIndex].repository}
              target="_blank"
            >
              <Icon icon={faSquareGithub} />
            </a>
          </Button>
        </div>
        <div className={styles.buttonGroup}>
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
        </div>
      </div>
    </div>
  );
};
