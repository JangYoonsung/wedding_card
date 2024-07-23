import { FONT_SIZE } from '@/constants/title';
import { Color } from './common';

export type TitleProps = {
  text: string;
  classes?: string;
  color?: Color;
  fontSize?: (typeof FONT_SIZE)[keyof typeof FONT_SIZE];
};
