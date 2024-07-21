import '@/style/animation.css';
import { CardProps } from '@/types/card';
import React from 'react';

const Card: React.FC<CardProps> = ({
  children,
  classes = '',
  color = 'white',
  showShadow = false,
}) => {
  const cardClasses = ['root-card', classes].filter(Boolean).join(' ');

  return (
    <div className={cardClasses} data-color={color} data-shadow={showShadow}>
      {children}
    </div>
  );
};

export default Card;
