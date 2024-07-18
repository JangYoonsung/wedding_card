import Card from '@/components/Card';
import Divider from '@/components/Divider';
import Map from '@/components/Map';
import Title from '@/components/Title';

const LocationInfo = () => {
  const locationInformationText = `セントアクアチャペル市ヶ谷

東京都新宿区市谷仲之町3-5 
アプローズスクエア東京迎賓館 内
  
都営新宿線曙橋駅A3出口から徒歩5分
  
03-6402-7256`;

  return (
    <Card classes="mx-4" useAnimation showShadow>
      <Title text="LOCATION INFO" color="primary" fontSize="2xl" />
      <Divider classes="my-2" />

      <div className="whitespace-pre">
        <p className="text-sm text-gray pb-4">{locationInformationText}</p>
        <a
          href="https://www.saint-acqua-chapel.jp/place/ichigaya/"
          target="_blank"
          className="text-sm text-gray underline">
          www.saint-acqua-chapel.jp/place/ichigaya/
        </a>
      </div>
      <Divider classes="my-2" />
      <Map />
    </Card>
  );
};

export default LocationInfo;
