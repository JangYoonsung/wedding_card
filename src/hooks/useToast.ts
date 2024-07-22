import dayjs from 'dayjs';
import { useState } from 'react';

const useToast = () => {
  const [toasts, setToasts] = useState<{ id: number; message: string }[]>([]);

  const addToast = (message: string) => {
    setToasts([...toasts, { id: dayjs().unix(), message }]);
  };

  const removeToast = (id: number) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  return { toasts, addToast, removeToast };
};

export default useToast;
