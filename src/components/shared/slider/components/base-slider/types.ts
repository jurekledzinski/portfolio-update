import { Ref } from 'react';

export type BaseSliderProps<T extends object> = {
  data: T[];
  emblaRef: Ref<HTMLDivElement>;
  onRenderSlide: (slide: T, index: number) => React.ReactNode;
  children?: React.ReactNode;
  className?: string;
};
