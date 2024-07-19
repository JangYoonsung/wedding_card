import { BORDER_COLOR } from '@/constants/common';
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
  onchange,
}: {
  name: Path<TSchema>;
  register: UseFormRegister<TSchema>;
  errors?: FieldErrors;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  classes?: string;
  onchange?: (event: React.ChangeEvent<HTMLInputElement>) => Promise<unknown> | unknown;
}) => {
  const inputRegister = register(name);
  const [errorKey, index, nameKey] = name.split('.');
  const errorMessage = Array.isArray(errors?.[errorKey])
    ? errors?.[errorKey]?.[Number(index)]?.[nameKey]?.message
    : errors?.[name]?.message;

  return (
    <div className="text-xs">
      <input
        className={`border rounded p-2 relative focus:outline-none focus:border-primary ${classes}`}
        data-border={errorMessage ? BORDER_COLOR.ERROR : BORDER_COLOR.PRIMARY}
        type={type}
        placeholder={placeholder}
        disabled={inputRegister.disabled}
        name={inputRegister.name}
        ref={inputRegister.ref}
        onBlur={inputRegister.onBlur}
        onChange={(event) => {
          inputRegister.onChange(event);
          onchange?.(event);
        }}
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
