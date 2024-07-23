import { COLOR, VARIANT } from '@/constants/common';
import { CommonProps } from './common';

type ButtonColor = Pick<typeof COLOR, 'PRIMARY' | 'SECONDARY' | 'GRAY'>;

export type ButtonProps = {
  color?: ButtonColor[keyof ButtonColor];
  variant?: (typeof VARIANT)[keyof typeof VARIANT];
  type?: HTMLButtonElement['type'];
  disabled?: boolean;
  isLoading?: boolean;
  classes?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
} & Partial<CommonProps>;

export type LinkButtonProps = Omit<ButtonProps, 'onChange' | 'type'> & { href: string };
