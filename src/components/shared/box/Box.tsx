import { BoxProps } from './types';
import { getClassesBox } from './utils';

export const Box = ({ children, ...props }: BoxProps) => {
  const classes = getClassesBox(props);

  return (
    <div {...props} className={classes}>
      {children}
    </div>
  );
};
