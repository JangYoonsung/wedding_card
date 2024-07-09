'use client';
import Input from '@/components/Input';
import { ATTENDANCE_STATUS, GENDER, WHICH_GUEST } from '@/constants/form';
import {
  kanaNameSchema,
  noneEmptyErrorMap,
  noneEmptyStringSchema,
  unionSchema,
} from '@/constants/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  attendanceStatus: unionSchema([ATTENDANCE_STATUS.PRESENT, ATTENDANCE_STATUS.ABSENT]),
  whichGuest: unionSchema([WHICH_GUEST.GROOM_SIDE, WHICH_GUEST.BRIDE_SIDE]),
  gender: unionSchema([GENDER.MALE, GENDER.FEMALE, GENDER.NO_ANSWER]),
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSchema>({
    defaultValues: {},
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: TSchema) => {
    console.log(data);
  };
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="firstName"
        register={register}
        errors={errors}
        placeholder="input your first name"
      />
      <input type="text" {...register('lastName')} />
      <input type="text" {...register('firstNameKana')} />
      <input type="text" {...register('lastNameKana')} />
      <input type="submit" />
    </form>
  );
};

export default CardForm;
