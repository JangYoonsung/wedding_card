import { schema } from '@/constants/schema';
import { FieldErrors, Path } from 'react-hook-form';
import { z } from 'zod';

export type TSchema = z.infer<typeof schema>;

export type SchemaProps = {
  name: Path<TSchema>;
  errors: FieldErrors;
};
