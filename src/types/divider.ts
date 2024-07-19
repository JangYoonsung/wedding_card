import { ORIENTATION } from '@/constants/divider';

export type DividerProps = {
  orientation?: (typeof ORIENTATION)[keyof typeof ORIENTATION];
  thickness?: string;
  color?: string;
  classes?: string;
};
