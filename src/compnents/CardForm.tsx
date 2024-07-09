'use client';
import { kanaNameSchema, noneEmptyErrorMap, noneEmptyStringSchema } from '@/constants/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  firstName: noneEmptyStringSchema,
  lastName: noneEmptyStringSchema,
  firstNameKana: kanaNameSchema,
  lastNameKana: kanaNameSchema,
  email: z.string({ errorMap: noneEmptyErrorMap }).email(),
  tel: z
    .string({ errorMap: noneEmptyErrorMap })
    .regex(/^([0-9]+(\([0-9]+\)|-[0-9]+-)?[0-9]+)?$/, { message: 'invalid' }),
  zipCode: z
    .string({ errorMap: noneEmptyErrorMap })
    .regex(/^([0-9]{3}-?[0-9]{4})?$/, { message: 'invalid' })
    .nullish(),
  address1: noneEmptyStringSchema.nullish(),
  address2: noneEmptyStringSchema.nullish(),
  memo: noneEmptyStringSchema.nullish(),
});

export type TSchema = z.infer<typeof schema>;

const CardForm = () => {
  const { register, handleSubmit } = useForm<TSchema>({
    defaultValues: {},
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: TSchema) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register('firstName')} />
      <input type="text" {...register('lastName')} />
      <input type="text" {...register('firstNameKana')} />
      <input type="text" {...register('lastNameKana')} />
    </form>
  );
};

export default CardForm;
