'use client';
import Divider from '@/components/Divider';
import Input from '@/components/Input';
import Label from '@/components/Label';
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
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <fieldset className="p-4">
        <Label text="name" isRequired />
        <div className="grid grid-flow-col grid-cols-2 justify-between gap-2">
          <Input
            name="firstName"
            register={register}
            errors={errors}
            classes="w-full"
            placeholder="input your first name"
          />
          <Input
            name="lastName"
            register={register}
            errors={errors}
            classes="w-full"
            placeholder="input your last name"
          />
        </div>
      </fieldset>
      <Divider />
      <input type="submit" />
    </form>
  );
};

export default CardForm;
