export type DataActions = {
  id: number;
  src: string;
  live?: string;
  repository?: string;
};

export type SliderActionsProps<T extends DataActions> = {
  currentIndex: number;
  data: T[];
  onModalOpen: () => void;
};

//   data: {
//     id: number;
//     src: string;
//     live: string;
//     repository: string;
//   }[];
