import { BORDER_COLOR } from '@/constants/common';

export type CardProps = {
  children?: React.ReactNode;
  classes?: string;
  color?: (typeof BORDER_COLOR)[keyof typeof BORDER_COLOR] | 'white';
};
