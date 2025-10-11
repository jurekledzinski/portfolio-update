export type SliderData = {
  id: number;
  src: string;
};

export type SliderProps<T extends SliderData> = {
  currentIndex: number;
  data: T[];
  disabledNext: boolean;
  disabledPrev: boolean;
  onClickNext: () => void;
  onClickPrev: () => void;
  onModalOpen: () => void;
  selectedIndex: number;
};
