import { BORDER_COLOR, VARIANT } from '@/constants/common';
import '@/style/button.css';
import React from 'react';
import { MoonLoader } from 'react-spinners';

const Button = ({
  color = 'primary',
  variant = 'contained',
  type = 'button',
  disabled,
  isLoading,
  classes,
  children,
  onClick,
}: {
  color?: (typeof BORDER_COLOR)[keyof typeof BORDER_COLOR];
  variant?: (typeof VARIANT)[keyof typeof VARIANT];
  type?: HTMLButtonElement['type'];
  disabled?: boolean;
  isLoading?: boolean;
  classes?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  return (
    <button
      className={`p-2 w-full border inline-flex gap-2 justify-center rounded font-bold ${classes}`}
      type={type}
      data-color={color}
      data-variant={variant}
      disabled={disabled || isLoading}
      onClick={onClick}>
      <MoonLoader size={20} speedMultiplier={0.5} loading={isLoading} color={`var(--${color})`} />
      {children}
    </button>
  );
};

export default Button;
