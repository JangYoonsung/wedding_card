import { HTMLInputTypeAttribute } from 'react';
import { CommonProps } from './common';
import { SchemaProps } from './schema';

export type InputProps = SchemaProps & {
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  onchange?: (event: React.ChangeEvent<HTMLInputElement>) => Promise<unknown> | unknown;
} & Pick<CommonProps, 'classes'>;

export type TextAreaProps = Omit<InputProps, 'type'>;
