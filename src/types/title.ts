import { FONT_SIZE } from '@/constants/title';
import { Color, CommonProps } from './common';

export type TitleProps = {
  text: string;
  color?: Color;
  fontSize?: (typeof FONT_SIZE)[keyof typeof FONT_SIZE];
} & Pick<CommonProps, 'classes'>;
