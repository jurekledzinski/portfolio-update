import { ContainerProps } from './types';
import { getClassesContainer } from './utils/classNames';
import { JSX } from 'react';

export const Container = ({
  as = 'div',
  children,
  ...props
}: ContainerProps) => {
  const Tag = `${as}` as keyof JSX.IntrinsicElements;

  const classes = getClassesContainer(props);

  return <Tag className={classes}>{children}</Tag>;
};
