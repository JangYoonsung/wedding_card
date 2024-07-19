import { COLOR, VARIANT } from '@/constants/common';
import { ButtonProps } from '@/types/button';
import React from 'react';
import { MoonLoader } from 'react-spinners';

const Button: React.FC<ButtonProps> = ({
  color = COLOR.PRIMARY,
  variant = VARIANT.CONTAINED,
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
