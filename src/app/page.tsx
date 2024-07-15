import Card from '@/components/Card';
import Divider from '@/components/Divider';
import LinkButton from '@/components/LinkButton';
import Map from '@/container/Map';

const Home = () => {
  return (
    <main className="h-svh bg-primary">
      <Card>
        <div className="font-bold text-lg text-primary">
          <h2>LOCATION INFO</h2>
          <h2>アクセス</h2>
        </div>
        <Divider classes="my-2" />
        <div className="whitespace-pre">
          <p className="text-sm text-gray pb-4">{`セントアクアチャペル市ヶ谷

東京都新宿区市谷仲之町3-5 
アプローズスクエア東京迎賓館 内

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

      <LinkButton href="/reply-form">招待状に回答する</LinkButton>
    </main>
  );
};

export default Home;
