import { atom } from 'recoil';

export type Toast = {
  id: number;
  message: string;
};

export const TOAST_STATE = atom<Toast[]>({
  key: 'toastState',
  default: [],
});
