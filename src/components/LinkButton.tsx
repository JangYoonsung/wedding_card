import { BORDER_COLOR, VARIANT } from '@/constants/common';
import '@/style/button.css';
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
  color?: (typeof BORDER_COLOR)[keyof typeof BORDER_COLOR];
  variant?: (typeof VARIANT)[keyof typeof VARIANT];
}) => {
  return (
    <Link
      className={`w-full button-root  ${classes}`}
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
