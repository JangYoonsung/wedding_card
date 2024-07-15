import React from 'react';

const Card = ({
  children,
  classes,
  color = 'white',
}: {
  children?: React.ReactNode;
  classes?: string;
  color?: string;
}) => {
  return (
    <div className={`m-4 p-4 bg-white text-center rounded ${classes}`} data-color={color}>
      {children}
    </div>
  );
};

export default Card;
