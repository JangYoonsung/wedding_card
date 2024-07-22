import { TOAST_STATE } from '@/constants/atoms';
import { Toast } from '@/types/toast';
import dayjs from 'dayjs';
import { useRecoilState } from 'recoil';

const useToast = () => {
  const [toasts, setToasts] = useRecoilState<Toast[]>(TOAST_STATE);

  const addToast = (message: string) => {
    setToasts([...toasts, { id: dayjs().unix(), message }]);
  };

  const removeToast = (id: number) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  return { toasts, addToast, removeToast };
};

export default useToast;
