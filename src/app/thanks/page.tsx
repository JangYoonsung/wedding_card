import LinkButton from '@/components/LinkButton';
import Title from '@/components/Title';
import ThanksIcon from '/public/icon/thanks.svg';

const Home: React.FC = () => {
  const thanksIconSize = 100;

  return (
    <main className="bg-bg_primary">
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <Title text="Thank you!" color="gray" classes="font-play-fair" fontSize="2xl" />

          <ThanksIcon
            width={thanksIconSize}
            height={thanksIconSize}
            fill="var(--gray)"
            className="mx-auto my-10"
          />

          <div className="mt-4 text-gray text-sm">
            <p>回答のご協力ありがとうございました。</p>
            <LinkButton href="../" color="gray" variant="text">
              TOPへ戻る
            </LinkButton>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
