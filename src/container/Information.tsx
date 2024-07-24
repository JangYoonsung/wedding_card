import AnimationWrapper from '@/components/AnimationWrapper';
import Card from '@/components/Card';
import Divider from '@/components/Divider';
import Title from '@/components/Title';
import React from 'react';

const Information: React.FC = () => {
  const description = `※ご多用中恐縮に存じますが挙式にもご列席を賜りたく
開式の30分前までにお越しくださいますようお願い申し上げます`;

  return (
    <AnimationWrapper>
      <Card color="primary" classes="text-white">
        <Title text="Wedding Information" color="white" fontSize="2xl" classes="font-play-fair" />
        <Divider classes="my-4" color="primary" />

        <div className="grid gap-2 text-center text-lg p-4">
          <p>2024年09月06日（金）</p>

          <div>
            <div className="flex items-center justify-center gap-2">
              <Title text="挙式" color="white" fontSize="lg" />
              <p>午後12:30</p>
            </div>

            <div className="flex items-center justify-center gap-2">
              <Title text="披露宴" color="white" fontSize="lg" />
              <p>午後13:30</p>
            </div>
          </div>
        </div>
        <Divider classes="my-4" color="primary" />

        <div className="whitespace-pre-wrap text-sm px-4">
          <p>{description}</p>
        </div>
      </Card>
    </AnimationWrapper>
  );
};

export default Information;
