import { BORDER_COLOR } from '@/constants/common';
import { TSchema } from '@/container/CardForm';
import '@/style/input.css';
import { HTMLInputTypeAttribute } from 'react';
import { FieldErrors, Path, UseFormRegister } from 'react-hook-form';

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
  const errorMessage = errors?.[name]?.message;

  return (
    <div className="text-xs">
      <input
        className={`border rounded p-2 relative focus:outline-none focus:border-primary ${classes}`}
        data-border={errorMessage ? BORDER_COLOR.ERROR : BORDER_COLOR.PRIMARY}
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />
      {errorMessage && (
        <div className="pt-1">
          <p className="text-error">{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Input;
