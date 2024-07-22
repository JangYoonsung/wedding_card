'use client';

import Toast from '@/components/Toast';
import { TOAST_STATE } from '@/constants/atoms';
import useToast from '@/hooks/useToast';
import React from 'react';
import { useRecoilValue } from 'recoil';

const ToastContainer: React.FC = () => {
  const { removeToast } = useToast();
  const toasts = useRecoilValue(TOAST_STATE);

  return (
    <>
      {toasts.map((toast) => (
        <Toast key={toast.id} message={toast.message} onClose={() => removeToast(toast.id)} />
      ))}
    </>
  );
};

export default ToastContainer;
