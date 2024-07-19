import { COLOR } from '@/constants/common';

export type CardProps = {
  children?: React.ReactNode;
  classes?: string;
  color?: (typeof COLOR)[keyof typeof COLOR] | 'none';
  useAnimation?: boolean;
  showShadow?: boolean;
};
