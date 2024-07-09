import { ORIENTATION } from '@/constants/Divider';
import '@/style/divider.css';
import { CSSProperties } from 'react';

const Divider = ({
  orientation = 'horizontal',
  thickness = '1px',
}: {
  orientation?: (typeof ORIENTATION)[keyof typeof ORIENTATION];
  thickness?: string;
}) => {
  const style: CSSProperties = {
    ['--thickness' as string]: thickness,
  };

  return <div data-orientation={orientation} style={style} className="root" />;
};

export default Divider;
