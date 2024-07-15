import { BORDER_COLOR } from '@/constants/common';
import '@/style/card.css';
import React from 'react';

const Card = ({
  children,
  classes,
  color = 'white',
}: {
  children?: React.ReactNode;
  classes?: string;
  color?: (typeof BORDER_COLOR)[keyof typeof BORDER_COLOR] | 'white';
}) => {
  return (
    <div className={`root-card ${classes}`} data-color={color}>
      {children}
    </div>
  );
};

export default Card;
