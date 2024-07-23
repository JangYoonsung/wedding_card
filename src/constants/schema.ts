import { z } from 'zod';
import { ATTENDANCE_STATUSES } from './form';

const noneEmptyErrorMap: z.ZodErrorMap = (issue, _ctx) => {
  if (issue.code === z.ZodIssueCode.invalid_type) {
    if (issue.received === 'null' || issue.received === 'undefined') {
      return { message: '必ず入力してください。' };
    }
  }
  return { message: _ctx.defaultError };
};

const noneEmptyStringSchema = z
  .string({ errorMap: noneEmptyErrorMap })
  .min(1, { message: '必ず入力してください。' });

const kanaNameSchema = noneEmptyStringSchema.regex(
  // eslint-disable-next-line no-irregular-whitespace
  /^([\u30A0-\u30FF]*|[\u30A0-\u30FF]+[ 　][\u30A0-\u30FF]+)$/,
  { message: 'カタカナで入力してください' },
);

const unionSchema = <T extends z.Primitive>(literals: readonly T[]) => {
  type Union = [z.ZodLiteral<T>, z.ZodLiteral<T>, ...z.ZodLiteral<T>[]];
  return z.union(literals.map((value) => z.literal(value)) as Union);
};

const isAccompaniedSchema = (literal: boolean) => z.object({ isAccompanied: z.literal(literal) });

const nameSchema = z.object({
  firstName: noneEmptyStringSchema,
  lastName: noneEmptyStringSchema,
  firstNameKana: kanaNameSchema,
  lastNameKana: kanaNameSchema,
});

const baseSchema = z
  .object({
    attendanceStatus: unionSchema(ATTENDANCE_STATUSES),
    email: noneEmptyStringSchema.email({ message: '有効なメールアドレスを入力してください。' }),
    tel: noneEmptyStringSchema
      .min(9, '有効な電話番号を入力してください。')
      .regex(/^(\+81[-.\s]?|0)[1-9]\d{0,3}[-.\s]?\d{1,4}[-.\s]?\d{4}$/, {
        message: '有効な電話番号を入力してください。',
      }),
    zipCode: noneEmptyStringSchema.regex(/^([0-9]{3}-?[0-9]{4})?$/, {
      message: '有効な郵便番号を入力してください。',
    }),
    address1: noneEmptyStringSchema,
    address2: noneEmptyStringSchema,
    memo: z.string().nullish(),
    companionInfo: z.array(nameSchema).nullish(),
  })
  .merge(nameSchema);

const accompaniedSchema = z.discriminatedUnion('isAccompanied', [
  isAccompaniedSchema(true).merge(z.object({ companionInfo: z.array(nameSchema).min(1) })),
  isAccompaniedSchema(false),
]);

export const schema = z.intersection(baseSchema, accompaniedSchema);

export const ZIP_CODE_LENGTH = 7;
