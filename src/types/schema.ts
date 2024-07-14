import { schema } from '@/constants/schema';
import { z } from 'zod';

export type TSchema = z.infer<typeof schema>;
