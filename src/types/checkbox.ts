import { Control } from 'react-hook-form';
import { SchemaProps, TSchema } from './schema';

export type CheckboxProps = Omit<SchemaProps, 'register'> & {
  control: Control<TSchema>;
  children?: React.ReactNode;
  classes?: string;
  onChangeHandler?: (isChecked: boolean) => void | undefined;
};
