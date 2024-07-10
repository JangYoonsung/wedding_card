import { z } from 'zod';
import { TRUE_OR_FALSE } from './form';

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
  .min(1, { message: '必ず入力してください。' });

export const kanaNameSchema = noneEmptyStringSchema.regex(
  /^([\u30A0-\u30FF]*|[\u30A0-\u30FF]+[ 　][\u30A0-\u30FF]+)$/,
  { message: 'カタカナで入力してください' },
);

export const unionSchema = <T extends z.Primitive>(literals: readonly T[]) => {
  type Union = [z.ZodLiteral<T>, z.ZodLiteral<T>, ...z.ZodLiteral<T>[]];
  return z.union(literals.map((value) => z.literal(value)) as Union);
};

export const isAccompaniedSchema = (literal: (typeof TRUE_OR_FALSE)[keyof typeof TRUE_OR_FALSE]) =>
  z.object({ isAccompanied: z.literal(literal) });
