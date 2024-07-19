import { useVisible } from '@/hooks/useVisible';
import '@/style/animation.css';
import { CardProps } from '@/types/card';
import React, { useRef } from 'react';

const Card: React.FC<CardProps> = ({
  children,
  classes = '',
  color = 'white',
  useAnimation = false,
  showShadow = false,
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
