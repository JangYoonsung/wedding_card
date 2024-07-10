import { TSchema } from '@/container/CardForm';
import '@/style/checkbox.css';
import React from 'react';
import { FieldErrors, Path, UseFormRegister } from 'react-hook-form';

const Checkbox = ({
  name,
  register,
  errors,
  children,
  classes,
}: {
  name: Path<TSchema>;
  register: UseFormRegister<TSchema>;
  errors: FieldErrors<TSchema>;
  children?: React.ReactNode;
  classes?: string;
}) => {
  return (
    <>
      <label
        htmlFor={name}
        className={`inline-flex gap-2 relative items-center text-sm cursor-pointer ${classes}`}>
        <input type="checkbox" className="hidden" id={name} {...register(name)} />
        <span className="rounded relative inline-block checkbox" />
        {children}
      </label>
      {errors?.[name]?.message && (
        <div>
          <p>{errors[name].message}</p>
        </div>
      )}
    </>
  );
};

export default Checkbox;
