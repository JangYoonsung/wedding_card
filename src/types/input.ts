import { HTMLInputTypeAttribute } from 'react';
import { SchemaProps } from './schema';

export type InputProps = SchemaProps & {
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  classes?: string;
  onchange?: (event: React.ChangeEvent<HTMLInputElement>) => Promise<unknown> | unknown;
};

export type TextAreaProps = Omit<InputProps, 'type'>;
