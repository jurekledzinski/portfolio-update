import styles from './Slider.module.css';
import { Alert } from '../alert';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { forwardRef } from 'react';
import { Image, ImageContainer } from '../image';
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
            <ImageContainer key={slide.src} loader="skeleton">
              {({ onLoad, onError, isError, isLoading }) => (
                <>
                  {isError && !isLoading ? (
                    <Alert
                      color="negative"
                      icon={faTriangleExclamation}
                      message="Failed to load image"
                      fullWidth
                      size="size-xs"
                      variant="light"
                    />
                  ) : (
                    <Image
                      className={styles.image}
                      src={slide.src}
                      onLoad={onLoad}
                      onError={onError}
                      alt="Project image"
                      width={600}
                      height={597}
                    />
                  )}
                </>
              )}
            </ImageContainer>
            <SlideDescription
              data={projectsDescription[currentIndex]}
              isActive={index === selectedIndex}
            />
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
