import { COLOR } from '@/constants/common';
import { useVisible } from '@/hooks/useVisible';
import '@/style/animation.css';
import { useRef } from 'react';

const Card = ({
  children,
  classes = '',
  color = 'white',
  useAnimation = false,
  showShadow = false,
}: {
  children?: React.ReactNode;
  classes?: string;
  color?: (typeof COLOR)[keyof typeof COLOR] | 'none';
  useAnimation?: boolean;
  showShadow?: boolean;
}) => {
  const divRef = useAnimation ? useRef(null) : undefined;
  const isVisible = divRef ? useVisible(divRef) : true;
  const cardClasses = [
    'root-card',
    classes,
    useAnimation && 'fade-in',
    useAnimation && isVisible && 'show',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div ref={divRef} className={cardClasses} data-color={color} data-shadow={showShadow}>
      {children}
    </div>
  );
};

export default Card;
