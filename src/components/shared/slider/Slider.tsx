import styles from './Slider.module.css';
import { forwardRef } from 'react';
import { projectsDescription } from '@/data';
import { SliderData, SliderProps } from './types';

import {
  BaseSlider,
  SlideDescription,
  SliderActions,
  SliderNavigation,
} from './components';

export const Slider = forwardRef<HTMLDivElement, SliderProps<SliderData>>(
  (
    {
      currentIndex,
      data,
      disabledNext,
      disabledPrev,
      onModalOpen,
      onClickNext,
      onClickPrev,
      selectedIndex,
    },
    ref
  ) => {
    return (
      <BaseSlider
        data={data}
        emblaRef={ref}
        onRenderSlide={(slide, index) => (
          <div className={styles.emblaSlide} key={slide.id}>
            <SlideDescription
              data={projectsDescription[currentIndex]}
              isActive={index === selectedIndex}
            />
            <img src={slide.src} alt="Project image" />
          </div>
        )}
      >
        <div className={styles.buttonGroups}>
          <SliderActions
            currentIndex={currentIndex}
            data={data}
            onModalOpen={onModalOpen}
          />
          <SliderNavigation
            onClickNext={onClickNext}
            onClickPrev={onClickPrev}
            disabledNext={disabledNext}
            disabledPrev={disabledPrev}
          />
        </div>
      </BaseSlider>
    );
  }
);
