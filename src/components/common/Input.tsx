import { FieldErrors, Path, UseFormRegister } from 'react-hook-form';
import { TSchema } from '../CardForm';
import { HTMLInputTypeAttribute } from 'react';

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
    <div className="text-sm">
      <input
        className={`border border-gray rounded px-4 py-2 focus:outline-none ${classes}`}
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />
      <div className="pt-1">
        {errors?.[name]?.message && <p className="text-red-600">{errors?.[name].message}</p>}
      </div>
    </div>
  );
};

export default Input;
