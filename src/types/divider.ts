import { ORIENTATION } from '@/constants/common';
import { Color, CommonProps } from './common';

export type DividerProps = {
  orientation?: (typeof ORIENTATION)[keyof typeof ORIENTATION];
  color?: Color;
  thickness?: string;
} & Pick<CommonProps, 'classes'>;
