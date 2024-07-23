import { Control } from 'react-hook-form';
import { CommonProps } from './common';
import { SchemaProps, TSchema } from './schema';

export type CheckboxProps = Omit<SchemaProps, 'register'> & {
  control: Control<TSchema>;
  onChangeHandler?: (isChecked: boolean) => void | undefined;
} & Partial<CommonProps>;
