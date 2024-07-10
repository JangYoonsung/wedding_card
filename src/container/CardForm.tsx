'use client';
import Divider from '@/components/Divider';
import Input from '@/components/Input';
import Label from '@/components/Label';
import Radio from '@/components/Radio';
import TextArea from '@/components/TextArea';
import { ATTENDANCE_STATUS } from '@/constants/form';
import { kanaNameSchema, noneEmptyStringSchema, unionSchema } from '@/constants/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

const attendanceStatuses = [ATTENDANCE_STATUS.PRESENT, ATTENDANCE_STATUS.ABSENT];

const schema = z.object({
  attendanceStatus: unionSchema(attendanceStatuses),
  firstName: noneEmptyStringSchema,
  lastName: noneEmptyStringSchema,
  firstNameKana: kanaNameSchema,
  lastNameKana: kanaNameSchema,
  email: noneEmptyStringSchema.email({ message: '有効なメールアドレスを入力してください。' }),
  tel: noneEmptyStringSchema.regex(/^([0-9]+(\([0-9]+\)|-[0-9]+-)?[0-9]+)?$/, {
    message: '有効な電話番号を入力してください。',
  }),
  zipCode: noneEmptyStringSchema
    .regex(/^([0-9]{3}-?[0-9]{4})?$/, { message: '有効な郵便番号を入力してください。' })
    .nullish(),
  address1: noneEmptyStringSchema.nullish(),
  address2: z.string().nullish(),
  memo: z.string().nullish(),
});

export type TSchema = z.infer<typeof schema>;

const CardForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSchema>({
    defaultValues: {
      attendanceStatus: ATTENDANCE_STATUS.PRESENT,
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<TSchema> = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <fieldset className="p-4">
        <Label text="ご出欠" isRequired />
        <Radio
          values={attendanceStatuses}
          labels={{ [ATTENDANCE_STATUS.PRESENT]: 'ご出席', [ATTENDANCE_STATUS.ABSENT]: 'ご欠席' }}
          register={register}
          name="attendanceStatus"
          errors={errors}
        />
      </fieldset>
      <Divider classes="mx-4" />

      <fieldset className="p-4">
        <Label text="お名前" isRequired />
        <div className="grid grid-flow-col grid-cols-2 justify-between gap-2">
          <Input
            name="firstName"
            register={register}
            errors={errors}
            classes="w-full"
            placeholder="山田"
          />
          <Input
            name="lastName"
            register={register}
            errors={errors}
            classes="w-full"
            placeholder="太郎"
          />
        </div>
      </fieldset>
      <Divider classes="mx-4" />

      <fieldset className="p-4">
        <Label text="フリガナ" isRequired />
        <div className="grid grid-flow-col grid-cols-2 justify-between gap-2">
          <Input
            name="firstNameKana"
            register={register}
            errors={errors}
            classes="w-full"
            placeholder="ヤマダ"
          />
          <Input
            name="lastNameKana"
            register={register}
            errors={errors}
            classes="w-full"
            placeholder="タロウ"
          />
        </div>
      </fieldset>
      <Divider classes="mx-4" />

      <fieldset className="p-4">
        <Label text="電話番号" isRequired />
        <Input
          name="tel"
          register={register}
          errors={errors}
          classes="w-full"
          placeholder="09012341234"
        />
      </fieldset>
      <Divider classes="mx-4" />

      <fieldset className="p-4">
        <Label text="メールアドレス" isRequired />
        <Input
          name="email"
          register={register}
          errors={errors}
          classes="w-full"
          placeholder="thankyou@gmail.com"
        />
      </fieldset>
      <Divider classes="mx-4" />

      <fieldset className="p-4">
        <Label text="郵便番号" isRequired />
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
        <Label text="ご住所" isRequired />
        <div className="grid gap-2">
          <Input
            name="address1"
            register={register}
            errors={errors}
            classes="w-full"
            placeholder="東京都目黒区中目黒x-x-x"
          />
          <Input
            name="address2"
            register={register}
            errors={errors}
            classes="w-full"
            placeholder="目黒のどこかの建物"
          />
        </div>
      </fieldset>
      <Divider classes="mx-4" />

      <fieldset className="p-4">
        <Label text="アレルギー" />
        <TextArea
          name="memo"
          classes="w-full"
          placeholder="アレルギー等ございましたらをご記入してください"
          errors={errors}
          register={register}
        />
      </fieldset>

      <button type="submit">submit</button>
    </form>
  );
};

export default CardForm;
