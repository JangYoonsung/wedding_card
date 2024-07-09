import { z } from 'zod';

export const noneEmptyStringSchema = z.string().min(1, { message: 'required' });
