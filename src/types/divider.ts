import { COLOR, ORIENTATION } from '@/constants/common';

export type DividerProps = {
  orientation?: (typeof ORIENTATION)[keyof typeof ORIENTATION];
  color?: (typeof COLOR)[keyof typeof COLOR];
  thickness?: string;
  classes?: string;
};
