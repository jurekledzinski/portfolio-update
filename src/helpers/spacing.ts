import { SpacingToken } from '@/types';

export const spacingClasses = (params: SpacingToken) => {
  const { m, mb, mt, ml, mr, p, pb, pl, pr, pt, maxWidth } = params;

  return {
    ...(m ? { [`${m}`]: true } : {}),
    ...(mb ? { [`${mb}`]: true } : {}),
    ...(ml ? { [`${ml}`]: true } : {}),
    ...(mr ? { [`${mr}`]: true } : {}),
    ...(mt ? { [`${mt}`]: true } : {}),
    ...(maxWidth ? { [`${maxWidth}`]: true } : {}),
    ...(p ? { [`${p}`]: true } : {}),
    ...(pb ? { [`${pb}`]: true } : {}),
    ...(pl ? { [`${pl}`]: true } : {}),
    ...(pr ? { [`${pr}`]: true } : {}),
    ...(pt ? { [`${pt}`]: true } : {}),
  };
};

export const spacingValues: Array<keyof SpacingToken> = [
  'm',
  'mb',
  'mt',
  'ml',
  'mr',
  'p',
  'pb',
  'pl',
  'pr',
  'pt',
  'maxWidth',
];
