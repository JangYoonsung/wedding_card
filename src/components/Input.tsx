import { BORDER_COLOR } from '@/constants/common';
import '@/style/common.css';
import { TSchema } from '@/types/schema';
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
  errors?: FieldErrors;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  classes?: string;
}) => {
  const [errorKey, index, _name] = name.split('.');
  const errorMessage = Array.isArray(errors?.[errorKey])
    ? errors?.[errorKey]?.[Number(index)]?.[_name]?.message
    : errors?.[name]?.message;

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
          <p className="text-error">{errorMessage.toString()}</p>
        </div>
      )}
    </div>
  );
};

export default Input;
