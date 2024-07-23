import { COLOR } from '@/constants/common';
import { TextAreaProps } from '@/types/input';
import React, { useEffect, useRef } from 'react';

const TextArea: React.FC<TextAreaProps> = ({
  name,
  register,
  errors,
  placeholder,
  classes = '',
}) => {
  const errorMessage = errors?.[name]?.message;
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
        name={rest.name}
        onChange={rest.onChange}
        onBlur={rest.onBlur}
        className={`box-border whitespace-pre-wrap border p-2 resize-none rounded overflow-hidden ${classes}`}
        data-border={errorMessage ? COLOR.ERROR : COLOR.PRIMARY}
        placeholder={placeholder}
      />
      {errorMessage && (
        <div className="pt-1">
          <p className="text-error">{errorMessage.toString()}</p>
        </div>
      )}
    </div>
  );
};

export default TextArea;
