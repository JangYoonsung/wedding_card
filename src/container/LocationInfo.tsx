import Card from '@/components/Card';
import Divider from '@/components/Divider';
import Map from '@/components/Map';
import Title from '@/components/Title';
import React from 'react';

const LocationInfo: React.FC = () => {
  const locationInformationText = `セントアクアチャペル市ヶ谷

東京都新宿区市谷仲之町3-5 
アプローズスクエア東京迎賓館 内
  
都営新宿線曙橋駅A3出口から徒歩5分
  
03-6402-7256`;

  return (
    <Card color="none" useAnimation>
      <Title text="Location Info" color="gray" fontSize="2xl" classes="font-play-fair" />
      <Divider classes="my-4" thickness="2px" />

      <div className="text-[#7a7a7a] text-sm whitespace-pre">
        <p className="pb-4">{locationInformationText}</p>
        <a
          href="https://www.saint-acqua-chapel.jp/place/ichigaya/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline">
          www.saint-acqua-chapel.jp/place/ichigaya/
        </a>
      </div>
      <Divider classes="my-4" thickness="2px" />
      <Map />
    </Card>
  );
};

export default LocationInfo;
