'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const schema = z.object({
  firstName: z.string().min(1, { message: 'required' }),
  lastName: z.string().min(1, { message: 'required' }),
  firstNameKana: z.string().min(1, { message: 'required' }),
  lastNameKana: z.string().min(1, { message: 'required' }),
});

export type TSchema = z.infer<typeof schema>;

const CardForm = () => {
  const { register, handleSubmit } = useForm<TSchema>({
    defaultValues: {},
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
