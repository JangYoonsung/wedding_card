import { Color, CommonProps } from './common';

export type CardProps = {
  classes?: string;
  color?: Color | 'none';
  useAnimation?: boolean;
  showShadow?: boolean;
} & Partial<CommonProps>;
