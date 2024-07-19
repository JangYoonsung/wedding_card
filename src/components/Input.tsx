import { BORDER_COLOR } from '@/constants/common';
import { InputProps } from '@/types/input';
import React from 'react';

const Input: React.FC<InputProps> = ({
  name,
  register,
  errors,
  type = 'text',
  placeholder,
  classes,
  onchange,
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
