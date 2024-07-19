import '@/style/checkbox.css';
import { CheckboxProps } from '@/types/checkbox';
import React from 'react';
import { Controller } from 'react-hook-form';

const Checkbox: React.FC<CheckboxProps> = ({
  name,
  errors,
  control,
  children,
  classes,
  onChangeHandler = undefined,
}) => {
  return (
    <>
      <label
        htmlFor={name}
        className={`inline-flex gap-2 relative items-center text-sm cursor-pointer ${classes}`}>
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <input
              type="checkbox"
              className="hidden"
              id={name}
              ref={field.ref}
              onBlur={field.onBlur}
              name={field.name}
              value={String(field.value)}
              onChange={(event) => {
                field.onChange(event);
                onChangeHandler?.(event.target.checked);
              }}
            />
          )}
        />
        <span className="rounded relative inline-block checkbox" />
        {children}
      </label>
      {errors?.[name]?.message && (
        <div className="pt-1">
          <p className="text-error">{errors[name].message.toString()}</p>
        </div>
      )}
    </>
  );
};

export default Checkbox;
