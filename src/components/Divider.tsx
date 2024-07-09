import { ORIENTATION } from '@/constants/Divider';
import '@/style/divider.css';
import { CSSProperties } from 'react';

const Divider = ({
  orientation = 'horizontal',
  thickness = '1px',
  color = 'lightGray',
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

  return <div data-orientation={orientation} style={style} className={`root ${classes}`} />;
};

export default Divider;
