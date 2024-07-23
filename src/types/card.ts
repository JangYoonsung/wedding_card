import { Color, CommonProps } from './common';

export type CardProps = {
  color?: Color | 'none';
  useAnimation?: boolean;
  showShadow?: boolean;
} & Partial<CommonProps>;
