import { ORIENTATION } from '@/constants/divider';
import { CSSProperties } from 'react';

const Divider = ({
  orientation = ORIENTATION.HORIZONTAL,
  thickness = '1px',
  color = 'var(--light-gray)',
  classes,
}: {
  orientation?: (typeof ORIENTATION)[keyof typeof ORIENTATION];
  thickness?: string;
  color?: string;
  classes?: string;
}) => {
  const style: CSSProperties = {
    ['--thickness' as string]: thickness,
    ['--color' as string]: color,
  };

  return <div data-orientation={orientation} style={style} className={`root-divider ${classes}`} />;
};

export default Divider;
