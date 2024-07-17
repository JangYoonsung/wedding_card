import { COLOR } from '@/constants/common';
import { FONT_SIZE } from '@/constants/title';
import '@/style/title.css';
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
  fontSize: (typeof FONT_SIZE)[keyof typeof FONT_SIZE];
}) => {
  const style: CSSProperties = {
    ['--color' as string]: color,
  };
  return (
    <h1 className={`root-title text-${fontSize} ${classes}`} style={style}>
      {text}
    </h1>
  );
};

export default Title;
