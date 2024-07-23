import Title from '@/components/Title';
import CardForm from '@/container/CardForm';
import React from 'react';

const ReplyForm: React.FC = () => {
  const description = `お手数ではございますが
下記お日にち迄に
出欠のご回答をくださいますよう
お願い申し上げます

また期日までのご回答が難しい場合には
ご一報いただけますと幸いです
  `;
  return (
    <main>
      <div className="text-center my-4 font-bold">
        <Title text="Wedding Invitation" classes="font-play-fair" fontSize="2xl" color="primary" />
        <Title text="Yoonsung & Juan" classes="font-play-fair" color="primary" fontSize="xl" />
      </div>

      <div className="text-sm py-2 text-center text-gray whitespace-pre">{description}</div>

      <p className="font-bold text-gray text-center">2024年8月9日（金）</p>
      <div className="mx-4">
        <CardForm />
      </div>
    </main>
  );
};

export default ReplyForm;
