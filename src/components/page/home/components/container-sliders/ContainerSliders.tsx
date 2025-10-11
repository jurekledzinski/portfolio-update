import stylesContainer from './ContainerSliders.module.css';
import useEmblaCarousel from 'embla-carousel-react';
import { sliderProjectsData, sliderScreenShotsData } from '@/data';
import { useControlSlider } from '@/hooks';

import {
  faChevronLeft,
  faChevronRight,
  faTriangleExclamation,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

import {
  Alert,
  BaseSlider,
  IconButton,
  Image,
  ImageContainer,
  Modal,
  Slider,
  useControlModal,
} from '@/components';

export const ContainerSliders = () => {
  const { onClose, onOpen, isOpen } = useControlModal();
  const [sliderProjectsRef, projectsApi] = useEmblaCarousel({});
  const projectSlideIndex = projectsApi?.selectedScrollSnap() ?? 0;

  const [sliderScreensRef, sliderScreensApi] = useEmblaCarousel({});

  const {
    disabledNext: disabledNextProjects,
    disabledPrev: disabledPrevProjects,
    onClickNext: onClickNextProjects,
    onClickPrev: onClickPrevProjects,
    selectedIndex: selectedIndexProjects,
  } = useControlSlider({ emblaApi: projectsApi });

  const {
    disabledNext: disabledNextScreens,
    disabledPrev: disabledPrevScreens,
    onClickNext: onClickNextScreens,
    onClickPrev: onClickPrevScreens,
  } = useControlSlider({ emblaApi: sliderScreensApi });

  return (
    <div className={stylesContainer.container}>
      <Slider
        data={sliderProjectsData}
        ref={sliderProjectsRef}
        currentIndex={projectSlideIndex}
        disabledNext={disabledNextProjects}
        disabledPrev={disabledPrevProjects}
        onClickNext={onClickNextProjects}
        onClickPrev={onClickPrevProjects}
        onModalOpen={onOpen}
        selectedIndex={selectedIndexProjects}
      />
      <Modal
        color="primary"
        confirmText="Send"
        layout="clean"
        onClose={onClose}
        open={isOpen}
        portal={true}
        title="Contact"
      >
        <IconButton
          color="primary"
          className={stylesContainer.close}
          icon={[faXmark]}
          onClick={onClose}
          variant="contained"
        />

        <BaseSlider
          className={stylesContainer.emblaViewport}
          data={sliderScreenShotsData[projectSlideIndex]}
          emblaRef={sliderScreensRef}
          onRenderSlide={(slide) => (
            <div className={stylesContainer.emblaSlide} key={slide.id}>
              <div className={stylesContainer.emblaSlideInner}>
                <ImageContainer
                  className={stylesContainer.wrapper}
                  key={slide.src}
                  loader="skeleton"
                >
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
                          className={stylesContainer.image}
                          src={slide.src}
                          onLoad={onLoad}
                          onError={onError}
                          alt="Screenshot image"
                          width={600}
                          height={597}
                        />
                      )}
                    </>
                  )}
                </ImageContainer>
              </div>
            </div>
          )}
        />

        <IconButton
          className={stylesContainer.prev}
          color="primary"
          disabled={disabledPrevScreens}
          icon={[faChevronLeft]}
          onClick={onClickPrevScreens}
          radius="radius-xs"
          size="size-lg"
          target="_blank"
          variant="contained"
        />

        <IconButton
          className={stylesContainer.next}
          color="primary"
          disabled={disabledNextScreens}
          icon={[faChevronRight]}
          onClick={onClickNextScreens}
          radius="radius-xs"
          size="size-lg"
          target="_blank"
          variant="contained"
        />
      </Modal>
    </div>
  );
};
