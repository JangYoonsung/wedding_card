import { z } from 'zod';

export const noneEmptyErrorMap: z.ZodErrorMap = (issue, _ctx) => {
  if (issue.code === z.ZodIssueCode.invalid_type) {
    if (issue.received === 'null' || issue.received === 'undefined') {
      return { message: 'required' };
    }
  }
  return { message: _ctx.defaultError };
};

export const noneEmptyStringSchema = z
  .string({ errorMap: noneEmptyErrorMap })
  .min(1, { message: 'required' });

export const kanaNameSchema = z
  .string({ errorMap: noneEmptyErrorMap })
  .regex(/^([\u30A0-\u30FF]*|[\u30A0-\u30FF]+[ 　][\u30A0-\u30FF]+)$/, { message: 'invalid' });
