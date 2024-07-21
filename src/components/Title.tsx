import { COLOR } from '@/constants/common';
import { FONT_SIZE } from '@/constants/title';
import { TitleProps } from '@/types/title';
import React, { CSSProperties } from 'react';

const Title: React.FC<TitleProps> = ({
  text,
  classes = '',
  color = COLOR.BLACK,
  fontSize = FONT_SIZE.XL,
}) => {
  const style: CSSProperties = {
    ['--color' as string]: `var(--${color})`,
  };

  return (
    <h1
      className={`${fontSize ? `text-${fontSize}` : ''} text-[var(--color)] font-bold ${classes}`}
      style={style}>
      {text}
    </h1>
  );
};

export default Title;
