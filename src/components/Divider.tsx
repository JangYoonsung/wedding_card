import { ORIENTATION } from '@/constants/Divider';

const Divider = ({
  orientation = 'horizontal',
  thickness = '1px',
}: {
  orientation: (typeof ORIENTATION)[keyof typeof ORIENTATION];
  thickness: string;
}) => {
  return <div data-orientation={orientation} style--thickness={thickness} className="root" />;
};

export default Divider;
