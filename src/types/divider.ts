import { ORIENTATION } from '@/constants/common';
import { Color } from './common';

export type DividerProps = {
  orientation?: (typeof ORIENTATION)[keyof typeof ORIENTATION];
  color?: Color;
  thickness?: string;
  classes?: string;
};
