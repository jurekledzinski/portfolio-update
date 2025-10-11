import styles from '../../Slider.module.css';
import { BaseSliderProps } from './types';
import { classNames } from '@/helpers';

export const BaseSlider = <T extends object>({
  className,
  children,
  data,
  emblaRef,
  onRenderSlide,
}: BaseSliderProps<T>) => {
  return (
    <div className={styles.embla}>
      <div
        className={classNames(styles.emblaViewport, className ?? '')}
        ref={emblaRef}
      >
        <div className={styles.emblaContainer}>
          {data.map((slide, index) => onRenderSlide(slide, index))}
        </div>
      </div>
      {children}
    </div>
  );
};
