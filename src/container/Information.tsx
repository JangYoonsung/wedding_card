import Card from '@/components/Card';
import Divider from '@/components/Divider';
import Title from '@/components/Title';
import React from 'react';

const Information: React.FC = () => {
  const description = `※ご多用中恐縮に存じますが挙式にもご列席を賜りたく
開式の30分前までにお越しくださいますようお願い申し上げます`;

  return (
    <Card color="secondary" useAnimation>
      <Title text="Wedding Information" color="white" fontSize="2xl" classes="font-play-fair" />
      <Divider classes="my-4" color="var(--secondary)" />

      <div className="grid gap-2">
        <div>
          <Title text="日付" color="white" fontSize="lg" />
          <p className="text-lg text-white">2024年09月06日（金）</p>
        </div>

        <div>
          <Title text="挙式" color="white" fontSize="lg" />
          <p className="text-lg text-white">午後12:30</p>
        </div>

        <div>
          <Title text="披露宴" color="white" fontSize="lg" />
          <p className="text-lg text-white">午後13:30</p>
        </div>
      </div>
      <Divider classes="my-4" color="var(--secondary)" />

      <div className="whitespace-pre-wrap">
        <p className="text-white">{description}</p>
      </div>
    </Card>
  );
};

export default Information;
