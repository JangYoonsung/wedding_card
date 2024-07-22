import { Toast } from '@/types/toast';
import { atom } from 'recoil';

export const TOAST_STATE = atom<Toast[]>({
  key: 'toastState',
  default: [],
});
