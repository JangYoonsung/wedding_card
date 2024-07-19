import { HTMLInputTypeAttribute } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { SchemaProps, TSchema } from './schema';

export type InputProps = SchemaProps & {
  register: UseFormRegister<TSchema>;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  classes?: string;
  onchange?: (event: React.ChangeEvent<HTMLInputElement>) => Promise<unknown> | unknown;
};
