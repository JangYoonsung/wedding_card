'use client';

import Card from '@/components/Card';
import Divider from '@/components/Divider';
import LinkButton from '@/components/LinkButton';
import Information from '@/container/Information';
import LocationInfo from '@/container/LocationInfo';
import Top from '@/container/Top';
import WelcomeNote from '@/container/WelcomeNote';

const Home = () => {
  return (
    <main className="h-full bg-bg_primary grid gap-6">
      <Top />

      <WelcomeNote />

      <Information />

      <LocationInfo />

      <Card color="secondary" classes="text-white mb-[15rem]" useAnimation>
        <Divider classes="my-4" color="var(--secondary)" />

        <div className="whitespace-pre">
          <p className="text-sm py-4">{`ご出欠のご返信は郵送に変わり
下記ボタンよりフォームへアクセスいただき
ご返信をお願い申し上げます`}</p>
        </div>
        <Divider classes="my-4" color="var(--secondary)" />
        <LinkButton href="/reply-form" variant="outline">
          招待状に回答する
        </LinkButton>
      </Card>
    </main>
  );
};

export default Home;
