import { FieldErrors, Path, UseFormRegister } from 'react-hook-form';
import { HTMLInputTypeAttribute } from 'react';
import { TSchema } from '@/container/CardForm';

const Input = ({
  name,
  register,
  errors,
  type = 'text',
  placeholder,
  classes,
}: {
  name: Path<TSchema>;
  register: UseFormRegister<TSchema>;
  errors: FieldErrors<TSchema>;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  classes?: string;
}) => {
  return (
    <div className="text-xs">
      <input
        className={`border border-gray rounded p-2 focus:outline-none ${classes}`}
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />
      {errors?.[name]?.message && (
        <div className="pt-1">
          <p className="text-red-600">{errors?.[name].message}</p>
        </div>
      )}
    </div>
  );
};

export default Input;
