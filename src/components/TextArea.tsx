import { TSchema } from '@/container/CardForm';
import { useEffect, useRef } from 'react';
import { FieldErrors, Path, UseFormRegister } from 'react-hook-form';

const TextArea = ({
  name,
  register,
  errors,
  placeholder,
  classes,
}: {
  name: Path<TSchema>;
  register: UseFormRegister<TSchema>;
  errors: FieldErrors<TSchema>;
  placeholder?: string;
  classes?: string;
}) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const { ref, ...rest } = register(name);

  const setRef = (element: HTMLTextAreaElement) => {
    ref(element);
    textareaRef.current = element;
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const resizeTextarea = () => {
      if (!textarea) return;

      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    };

    textarea.addEventListener('input', resizeTextarea);

    resizeTextarea();

    return () => {
      textarea.removeEventListener('input', resizeTextarea);
    };
  }, []);

  return (
    <div className="text-xs relative">
      <textarea
        ref={setRef}
        className={`box-border whitespace-pre-wrap border p-2 resize-none rounded overflow-hidden ${classes}`}
        placeholder={placeholder}
        {...rest}
      />
      {errors?.[name]?.message && (
        <div className="pt-1">
          <p className="text-red-600">{errors[name].message}</p>
        </div>
      )}
    </div>
  );
};

export default TextArea;
