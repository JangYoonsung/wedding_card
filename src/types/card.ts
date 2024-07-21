import { COLOR } from '@/constants/common';
import { CommonProps } from './common';

export type CardProps = {
  classes?: string;
  color?: (typeof COLOR)[keyof typeof COLOR] | 'none';
  useAnimation?: boolean;
  showShadow?: boolean;
} & Partial<CommonProps>;
