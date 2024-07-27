'use client';

import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import Divider from '@/components/Divider';
import Input from '@/components/Input';
import Label from '@/components/Label';
import Radio from '@/components/Radio';
import TextArea from '@/components/TextArea';
import { ADD_GUEST_ENDPOINT, ZIP_CLOUD_ENDPOINT } from '@/constants/endpoin';
import { ATTENDANCE_STATUS, ATTENDANCE_STATUSES } from '@/constants/form';
import { schema } from '@/constants/schema';
import useToast from '@/hooks/useToast';
import { TZipCloud } from '@/types/prefacture';
import { TSchema } from '@/types/schema';
import { formatWithHyphens } from '@/utils/string';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import React, { Fragment } from 'react';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import AddIcon from '/public/icon/add.svg';
import RemoveIcon from '/public/icon/remove.svg';

const CardForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors, isSubmitting, isValid },
  } = useForm<TSchema>({
    defaultValues: {
      attendanceStatus: ATTENDANCE_STATUS.PRESENT,
      isAccompanied: false,
    },
    resolver: zodResolver(schema),
  });
  const { fields, append, remove } = useFieldArray<TSchema>({ control, name: 'companionInfo' });
  const { addToast } = useToast();
  const router = useRouter();

  const buttonIconSize = 12;

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
    const res = await fetch(`${ZIP_CLOUD_ENDPOINT}${zipCode}`);

    const zipRes: TZipCloud = await res.json();
    if (zipRes.results) {
      const prefecture = zipRes.results[0];
      setValue('address1', prefecture.address1 + prefecture.address2 + prefecture.address3);
    }
  };

  const onSubmit: SubmitHandler<TSchema> = async (data) => {
    const res = await fetch(ADD_GUEST_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'applicatioin/json',
      },
      mode: 'cors',
      body: JSON.stringify({
        ...data,
        tel: formatWithHyphens(data.tel),
        zipCode: formatWithHyphens(data.zipCode),
      }),
    });

    if (!res.ok) {
      addToast((await res.json())?.message);
      return null;
    }
    router.push('/thanks');
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border my-4 rounded border-light_gray bg-white shadow-md">
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
            classes={`w-full ${errors.address1?.message ? '!border-error' : ''}`}
            placeholder="東京都目黒区中目黒x-x-x"
          />
          <Input
            name="address2"
            register={register}
            classes={`w-full ${errors.address2?.message ? '!border-error' : ''}`}
            placeholder="目黒のどこかの建物"
          />
        </div>
        {(errors.address1?.message || errors.address2?.message) && (
          <div className="text-error text-xs pt-1">
            <p>{errors.address1?.message || errors.address2?.message}</p>
          </div>
        )}
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
          お連れ様を追加する
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
                  placeholder="ヤマダ"
                />
                <Input
                  name={`companionInfo.${index}.lastNameKana`}
                  register={register}
                  errors={errors}
                  classes="w-full"
                  placeholder="タロウ"
                />
              </div>
            </fieldset>

            <div className="p-4 flex gap-2 text-xs">
              <Button
                type="button"
                variant="outline"
                disabled={isSubmitting}
                onClick={appendCompanion}>
                <AddIcon fill="var(--primary)" width={buttonIconSize} height={buttonIconSize} />
                追加する
              </Button>
              {index !== 0 && (
                <Button
                  type="button"
                  variant="outline"
                  disabled={isSubmitting}
                  onClick={() => remove(index)}>
                  <RemoveIcon
                    fill="var(--primary)"
                    width={buttonIconSize}
                    height={buttonIconSize}
                  />
                  削除する
                </Button>
              )}
            </div>
          </Fragment>
        ))}

      <div className="p-4">
        <Button type="submit" color="primary" isLoading={isSubmitting} disabled={isSubmitting}>
          回答を送信する
        </Button>
      </div>
    </form>
  );
};

export default CardForm;
