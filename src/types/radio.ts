import { CommonProps } from './common';
import { SchemaProps } from './schema';

export type RadioProps<T extends string> = SchemaProps & {
  values: readonly T[];
  labels?: Record<T, string>;
  classes?: string;
} & Pick<CommonProps, 'classes'>;
