import { BORDER_COLOR } from '@/constants/common';
import '@/style/card.css';
import React from 'react';

export type CardProps = {
  children?: React.ReactNode;
  classes?: string;
  color?: (typeof BORDER_COLOR)[keyof typeof BORDER_COLOR] | 'white';
};

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
