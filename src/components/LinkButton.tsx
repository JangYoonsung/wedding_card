import { BORDER_COLOR, COLOR, VARIANT } from '@/constants/common';
import Link from 'next/link';
import React from 'react';
import { MoonLoader } from 'react-spinners';

const LinkButton = ({
  href,
  disabled,
  classes,
  children,
  isLoading = false,
  color = BORDER_COLOR.PRIMARY,
  variant = VARIANT.CONTAINED,
}: {
  href: string;
  disabled?: boolean;
  isLoading?: boolean;
  classes?: string;
  children?: React.ReactNode;
  color?: (typeof COLOR)[keyof typeof COLOR];
  variant?: (typeof VARIANT)[keyof typeof VARIANT];
}) => {
  return (
    <Link
      className={`w-full root-button  ${classes}`}
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
