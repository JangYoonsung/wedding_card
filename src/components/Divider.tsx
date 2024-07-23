import { ORIENTATION } from '@/constants/common';
import { DividerProps } from '@/types/divider';
import { CSSProperties } from 'react';

const Divider: React.FC<DividerProps> = ({
  orientation = ORIENTATION.HORIZONTAL,
  thickness = '1px',
  color = 'var(--light-gray)',
  classes = '',
}) => {
  const style: CSSProperties = {
    ['--thickness' as string]: thickness,
    ['--color' as string]: color,
  };

  return <div data-orientation={orientation} style={style} className={`root-divider ${classes}`} />;
};

export default Divider;
