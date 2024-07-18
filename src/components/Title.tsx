import { COLOR } from '@/constants/common';
import { FONT_SIZE } from '@/constants/title';
import { CSSProperties } from 'react';

const Title = ({
  text,
  classes = '',
  color = COLOR.BLACK,
  fontSize = FONT_SIZE.XL,
}: {
  text: string;
  classes?: string;
  color?: (typeof COLOR)[keyof typeof COLOR];
  fontSize?: (typeof FONT_SIZE)[keyof typeof FONT_SIZE];
}) => {
  const style: CSSProperties = {
    ['--color' as string]: `var(--${color})`,
  };
  return (
    <h1 className={`text-[var(--color)] font-bold text-${fontSize} ${classes}`} style={style}>
      {text}
    </h1>
  );
};

export default Title;
