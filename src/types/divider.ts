import { ORIENTATION } from '@/constants/common';

export type DividerProps = {
  orientation?: (typeof ORIENTATION)[keyof typeof ORIENTATION];
  thickness?: string;
  color?: string;
  classes?: string;
};
