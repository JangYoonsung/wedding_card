import { TSchema } from '@/container/CardForm';
import '@/style/radio.css';
import { Fragment } from 'react';
import { FieldErrors, Path, UseFormRegister } from 'react-hook-form';

const Radio = <T extends string>({
  values,
  name,
  errors,
  register,
  labels,
  classes,
}: {
  values: readonly T[];
  name: Path<TSchema>;
  errors: FieldErrors<TSchema>;
  register: UseFormRegister<TSchema>;
  labels?: Record<T, string>;
  classes?: string;
}) => {
  return (
    <>
      <div role="radioGroup" className={`flex gap-2 relative text-sm ${classes}`}>
        {values.map((value, index) => {
          return (
            <Fragment key={index}>
              <label htmlFor={value} className="flex items-center gap-1">
                <input
                  id={value}
                  className="radio"
                  type="radio"
                  value={value}
                  {...register(name)}
                />
                {labels?.[value] ?? value}
              </label>
            </Fragment>
          );
        })}
      </div>
      {errors?.[name]?.message && (
        <div className="pt-1 text-xs">
          <p className="text-red-600">{errors[name].message}</p>
        </div>
      )}
    </>
  );
};

export default Radio;
