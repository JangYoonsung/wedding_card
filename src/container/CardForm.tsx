'use client';
import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import Divider from '@/components/Divider';
import Input from '@/components/Input';
import Label from '@/components/Label';
import Radio from '@/components/Radio';
import TextArea from '@/components/TextArea';
import { ATTENDANCE_STATUS, ATTENDANCE_STATUSES } from '@/constants/form';
import { schema } from '@/constants/schema';
import { TSchema } from '@/types/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { Fragment } from 'react';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import AddIcon from '../../public/icon/add.svg';
import RemoveIcon from '../../public/icon/remove.svg';

const CardForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors, isSubmitting },
  } = useForm<TSchema>({
    defaultValues: {
      attendanceStatus: ATTENDANCE_STATUS.PRESENT,
      isAccompanied: false,
    },
    resolver: zodResolver(schema),
  });

  const { fields, append, remove } = useFieldArray<TSchema>({ control, name: 'companionInfo' });

  const appendCompanion = () => {
    append({ firstName: '', lastName: '', firstNameKana: '', lastNameKana: '' });
  };

  const handleOnChecked = (isChecked: boolean): void => {
    if (isChecked) {
      appendCompanion();
      return;
    }
    remove();
  };

  const searchZipCode = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const zipCode = event.target.value;
    const res = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipCode}`);

    const zipRes = await res.json();
    if (zipRes.results?.[0]) {
      const prefecture = zipRes.results?.[0];
      setValue('address1', prefecture.address1 + prefecture.address2 + prefecture.address3);
    }
  };

  const onSubmit: SubmitHandler<TSchema> = async (data) => {
    return await fetch('/api/guest', {
      method: 'POST',
      headers: {
        'Content-Type': 'applicatioin/json',
      },
      mode: 'cors',
      body: JSON.stringify(data),
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="border my-4 rounded border-light_gray">
      <fieldset className="p-4">
        <Label text="ご出欠" isRequired />
        <Radio
          values={ATTENDANCE_STATUSES}
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
          type="tel"
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
          type="email"
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
          onchange={searchZipCode}
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
      <Divider classes="mx-4" />

      <fieldset className="p-4">
        <Label text="お連れ様有無" />
        <Checkbox
          name="isAccompanied"
          errors={errors}
          control={control}
          onChangeHandler={handleOnChecked}>
          お疲れ様を追加する
        </Checkbox>
      </fieldset>

      {watch().isAccompanied &&
        fields.map((field, index) => (
          <Fragment key={field.id}>
            {index !== 0 && <Divider classes="mx-4" />}

            <fieldset className="p-4">
              <Label text="お連れ様のお名前" isRequired />
              <div className="grid grid-flow-col grid-cols-2 justify-between gap-2">
                <Input
                  name={`companionInfo.${index}.firstName`}
                  register={register}
                  errors={errors}
                  classes="w-full"
                  placeholder="山田"
                />
                <Input
                  name={`companionInfo.${index}.lastName`}
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
                  name={`companionInfo.${index}.firstNameKana`}
                  register={register}
                  errors={errors}
                  classes="w-full"
                  placeholder="山田"
                />
                <Input
                  name={`companionInfo.${index}.lastNameKana`}
                  register={register}
                  errors={errors}
                  classes="w-full"
                  placeholder="太郎"
                />
              </div>
            </fieldset>

            <div className="p-4 flex gap-2 text-xs">
              <Button
                type="button"
                variant="outline"
                isLoading={isSubmitting}
                disabled={isSubmitting}
                onClick={appendCompanion}>
                <AddIcon fill="var(--primary)" width={12} height={12} />
                追加する
              </Button>
              {index !== 0 && (
                <Button
                  type="button"
                  variant="outline"
                  isLoading={isSubmitting}
                  disabled={isSubmitting}
                  onClick={() => remove(index)}>
                  <RemoveIcon fill="var(--primary)" width={12} height={12} />
                  削除する
                </Button>
              )}
            </div>
          </Fragment>
        ))}

      <div className="p-4">
        <Button type="submit" isLoading={isSubmitting} disabled={isSubmitting}>
          回答を送信する
        </Button>
      </div>
    </form>
  );
};

export default CardForm;
