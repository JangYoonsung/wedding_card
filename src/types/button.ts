import { COLOR, VARIANT } from '@/constants/common';

export type ButtonProps = {
  color?: (typeof COLOR)[keyof typeof COLOR];
  variant?: (typeof VARIANT)[keyof typeof VARIANT];
  type?: HTMLButtonElement['type'];
  disabled?: boolean;
  isLoading?: boolean;
  classes?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export type LinkButtonProps = Omit<ButtonProps, 'onChange' | 'type'> & { href: string };
