import '@/style/radio.css';
import { RadioProps } from '@/types/radio';
import React, { Fragment } from 'react';

const Radio = <T extends string>({
  values,
  name,
  errors,
  register,
  labels,
  classes,
}: RadioProps<T>): React.ReactElement => {
  const radioRegister = register(name);

  return (
    <React.Fragment>
      <div role="radioGroup" className={`flex gap-2 relative text-sm ${classes}`}>
        {values.map((value) => {
          return (
            <Fragment key={value}>
              <label htmlFor={value} className="flex items-center gap-1">
                <input
                  name={radioRegister.name}
                  ref={radioRegister.ref}
                  onChange={radioRegister.onChange}
                  onBlur={radioRegister.onBlur}
                  id={value}
                  value={value}
                  className="radio"
                  type="radio"
                />
                {labels?.[value] ?? value}
              </label>
            </Fragment>
          );
        })}
      </div>
      {errors?.[name]?.message && (
        <div className="pt-1 text-xs">
          <p className="text-error">{errors[name].message.toString()}</p>
        </div>
      )}
    </React.Fragment>
  );
};

export default Radio;
