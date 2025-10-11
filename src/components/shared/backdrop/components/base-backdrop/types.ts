import { BackdropProps } from '../../types';

type OmitKeys = 'portal' | 'zIndex';

export type BaseBackdropProps = Omit<BackdropProps, OmitKeys>;
