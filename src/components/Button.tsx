import { BORDER_COLOR, VARIANT } from '@/constants/common';
import '@/style/button.css';
import React from 'react';

const Button = ({
  color = 'primary',
  variant = 'contained',
  type = 'button',
  disabled,
  classes,
  children,
  onClick,
}: {
  color?: (typeof BORDER_COLOR)[keyof typeof BORDER_COLOR];
  variant?: (typeof VARIANT)[keyof typeof VARIANT];
  type?: HTMLButtonElement['type'];
  disabled?: boolean;
  classes?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  return (
    <button
      className={`p-2 w-full border inline-flex justify-center rounded font-bold ${classes}`}
      type={type}
      data-color={color}
      data-variant={variant}
      disabled={disabled}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
