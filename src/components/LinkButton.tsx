import { COLOR, VARIANT } from '@/constants/common';
import { LinkButtonProps } from '@/types/button';
import Link from 'next/link';
import React from 'react';
import { MoonLoader } from 'react-spinners';

const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  disabled,
  children,
  classes = '',
  isLoading = false,
  color = COLOR.PRIMARY,
  variant = VARIANT.CONTAINED,
}) => {
  return (
    <Link
      className={`w-full root-button ${classes}`}
      href={href}
      aria-disabled={disabled || isLoading}
      data-color={color}
      data-variant={variant}>
      <MoonLoader size={20} speedMultiplier={0.5} loading={isLoading} color={`var(--${color})`} />
      {children}
    </Link>
  );
};

export default LinkButton;
