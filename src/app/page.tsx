'use client';
import Card from '@/components/Card';
import Divider from '@/components/Divider';
import LinkButton from '@/components/LinkButton';
import Map from '@/container/Map';

const Home = () => {
  return (
    <main className="h-full bg-primary">
      <Card useAnimation showShadow classes="info">
        <div className="font-bold text-lg text-primary">
          <h2>WEDDING INFORMATION</h2>
          <h2>挙式・披露宴</h2>
        </div>
        <Divider classes="my-2" />

        <div>
          <h2 className="text-lg font-bold text-primary">日付</h2>
          <p className="text-lg text-gray">2024年09月06日（金）</p>
        </div>
        <Divider classes="my-2" />

        <div>
          <h2 className="text-lg font-bold text-primary">挙式</h2>
          <p className="text-lg text-gray">午後12:30</p>
        </div>
        <Divider classes="my-2" />

        <div>
          <h2 className="text-lg font-bold text-primary">披露宴</h2>
          <p className="text-lg text-gray">午後13:30</p>
        </div>
        <Divider classes="my-2" />

        <div className="break-words whitespace-pre-wrap py-2">
          <p className="text-gray text-sm">{`※ご多用中恐縮に存じますが挙式にもご列席を賜りたく
開式の30分前までにお越しくださいますようお願い申し上げます`}</p>
        </div>
      </Card>

      <Card classes="map" useAnimation showShadow>
        <div className="font-bold text-lg text-primary">
          <h2>LOCATION INFO</h2>
          <h2>アクセス</h2>
        </div>
        <Divider classes="my-2" />
        <div className="whitespace-pre">
          <p className="text-sm text-gray pb-4">{`セントアクアチャペル市ヶ谷

東京都新宿区市谷仲之町3-5 
アプローズスクエア東京迎賓館 内

都営新宿線曙橋駅A3出口から徒歩5分

03-6402-7256`}</p>
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

      <Card color="primary" classes="form" useAnimation>
        <h2 className="text-white font-bold text-lg">RSVP</h2>
        <Divider classes="my-2" />
        <div className="whitespace-pre">
          <p className="text-sm text-white py-4">{`ご出欠のご返信は郵送に変わり
下記ボタンよりフォームへアクセスいただき
ご返信をお願い申し上げます`}</p>
        </div>
        <Divider classes="my-2" />
        <LinkButton href="/reply-form" variant="outline">
          招待状に回答する
        </LinkButton>
      </Card>
    </main>
  );
};

export default Home;
