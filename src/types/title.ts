import { COLOR } from '@/constants/common';
import { FONT_SIZE } from '@/constants/title';

export type TitleProps = {
  text: string;
  classes?: string;
  color?: (typeof COLOR)[keyof typeof COLOR];
  fontSize?: (typeof FONT_SIZE)[keyof typeof FONT_SIZE];
};
