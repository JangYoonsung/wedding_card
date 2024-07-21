'use client';

import { COLOR } from '@/constants/common';
import { TitleProps } from '@/types/title';
import React, { CSSProperties } from 'react';

const Title: React.FC<TitleProps> = ({
  text,
  classes = '',
  fontSize = '',
  color = COLOR.BLACK,
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
