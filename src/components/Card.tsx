import '@/style/card.css';
import { CardProps } from '@/types/card';
import React from 'react';

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, classes, color = 'white' }: CardProps, ref) => {
    return (
      <div ref={ref} className={`root-card ${classes}`} data-color={color}>
        {children}
      </div>
    );
  },
);

export default Card;
