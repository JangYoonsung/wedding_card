'use client';

import Title from '@/components/Title';
import Toast from '@/components/Toast';
import { TOAST_STATE } from '@/constants/atoms';
import CardForm from '@/container/CardForm';
import useToast from '@/hooks/useToast';
import React from 'react';
import { useRecoilValue } from 'recoil';

const ReplyForm: React.FC = () => {
  const { removeToast } = useToast();
  const toasts = useRecoilValue(TOAST_STATE);

  const description = `お手数ではございますが
下記お日にち迄に
出欠のご回答をくださいますよう
お願い申し上げます

また期日までのご回答が難しい場合には
ご一報いただけますと幸いです
  `;
  return (
    <main>
      <div className="text-center my-4">
        <Title
          text="Wedding Invitation"
          classes="font-play-fair"
          fontSize="2xl"
          color="secondary"
        />
        <Title text="Yoonsung & Juan" classes="font-play-fair" color="secondary" fontSize="xl" />
      </div>

      <div className="text-sm py-2 text-center text-gray whitespace-pre">{description}</div>

      <p className="font-bold text-gray text-center">2024年8月9日（金）</p>
      <div className="mx-4">
        <CardForm />
      </div>
      {toasts.map((toast) => (
        <Toast key={toast.id} message={toast.message} onClose={() => removeToast(toast.id)} />
      ))}
    </main>
  );
};

export default ReplyForm;
