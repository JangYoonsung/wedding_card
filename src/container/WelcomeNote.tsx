import Card from '@/components/Card';
import Divider from '@/components/Divider';
import React from 'react';

const WelcomeNote: React.FC = () => {
  const greetingText = `謹啓

皆様におかれましては
ますますご清祥のこととお慶び申し上げます
  
籍を入れて2年という月日が経ちますが
この度私たちは結婚式を挙げることになりました

つきましては日頃お世話になっております皆様に
感謝を込めてささやかな小宴を催したく存じます
  
ご多用中誠に恐縮ではございますが
ぜひご出席をいただきたくご案内申し上げます
  
謹白`;
  return (
    <Card color="none">
      <Divider classes="my-4" thickness="2px" />
      <p className="text-gray text-center text-base font-bold whitespace-pre-wrap break-words">
        {greetingText}
      </p>
      <Divider classes="my-4" thickness="2px" />
    </Card>
  );
};

export default WelcomeNote;
