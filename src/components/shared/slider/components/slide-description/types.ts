import { projectsDescription } from '@/data';

export type SlideDescriptionProps = {
  isActive: boolean;
  data: (typeof projectsDescription)[0];
};
