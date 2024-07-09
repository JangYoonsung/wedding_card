'use client';
import Divider from '@/components/Divider';
import Input from '@/components/Input';
import Label from '@/components/Label';
import Radio from '@/components/Radio';
import { ATTENDANCE_STATUS, GENDER, WHICH_GUEST } from '@/constants/form';
import {
  kanaNameSchema,
  noneEmptyErrorMap,
  noneEmptyStringSchema,
  unionSchema,
} from '@/constants/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

const attendanceStatuses = [ATTENDANCE_STATUS.PRESENT, ATTENDANCE_STATUS.ABSENT];
const whichGuests = [WHICH_GUEST.GROOM_SIDE, WHICH_GUEST.BRIDE_SIDE];
const genders = [GENDER.MALE, GENDER.FEMALE, GENDER.NO_ANSWER];

const schema = z.object({
  attendanceStatus: unionSchema(attendanceStatuses),
  whichGuest: unionSchema(whichGuests),
  gender: unionSchema(genders),
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
    defaultValues: { attendanceStatus: ATTENDANCE_STATUS.PRESENT },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<TSchema> = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <fieldset className="p-4">
        <Label text="attendanceStatus" isRequired />
        <Radio
          values={[ATTENDANCE_STATUS.PRESENT, ATTENDANCE_STATUS.ABSENT]}
          labels={{ [ATTENDANCE_STATUS.PRESENT]: 'PRESENT', [ATTENDANCE_STATUS.ABSENT]: 'ABSENT' }}
          register={register}
          name="attendanceStatus"
          errors={errors}
        />
      </fieldset>
      <Divider classes="mx-4" />

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
      <Divider classes="mx-4" />

      <fieldset className="p-4">
        <Label text="furigana" isRequired />
        <div className="grid grid-flow-col grid-cols-2 justify-between gap-2">
          <Input
            name="firstNameKana"
            register={register}
            errors={errors}
            classes="w-full"
            placeholder="input your first name"
          />
          <Input
            name="lastNameKana"
            register={register}
            errors={errors}
            classes="w-full"
            placeholder="input your last name"
          />
        </div>
      </fieldset>
      <Divider classes="mx-4" />

      <fieldset className="p-4">
        <Label text="tel" isRequired />
        <Input
          name="tel"
          register={register}
          errors={errors}
          classes="w-full"
          placeholder="input your phone number"
        />
      </fieldset>
      <Divider classes="mx-4" />

      <fieldset className="p-4">
        <Label text="email" isRequired />
        <Input
          name="email"
          register={register}
          errors={errors}
          classes="w-full"
          placeholder="input your email address"
        />
      </fieldset>
      <Divider classes="mx-4" />

      <fieldset className="p-4">
        <Label text="zipCode" isRequired />
        <Input
          name="zipCode"
          register={register}
          errors={errors}
          classes="w-full"
          placeholder="1230012"
        />
      </fieldset>
      <Divider classes="mx-4" />

      <fieldset className="p-4">
        <Label text="address" isRequired />
        <div className="grid gap-2">
          <Input
            name="address1"
            register={register}
            errors={errors}
            classes="w-full"
            placeholder="meguro-ku nakameguro x-x-x, tokyo"
          />
          <Input
            name="address2"
            register={register}
            errors={errors}
            classes="w-full"
            placeholder="exam nakameguro xxx"
          />
        </div>
      </fieldset>
      <Divider classes="mx-4" />

      <button type="submit">submit</button>
    </form>
  );
};

export default CardForm;
