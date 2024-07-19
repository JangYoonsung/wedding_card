import { BORDER_COLOR, VARIANT } from '@/constants/common';
import React from 'react';
import { MoonLoader } from 'react-spinners';

type ButtonProps = {
  color?: (typeof BORDER_COLOR)[keyof typeof BORDER_COLOR];
  variant?: (typeof VARIANT)[keyof typeof VARIANT];
  type?: HTMLButtonElement['type'];
  disabled?: boolean;
  isLoading?: boolean;
  classes?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const Button: React.FC<ButtonProps> = ({
  color = 'primary',
  variant = 'contained',
  type = 'button',
  disabled,
  isLoading = false,
  classes,
  children,
  onClick,
}) => {
  return (
    <button
      className={`w-full root-button ${classes}`}
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
