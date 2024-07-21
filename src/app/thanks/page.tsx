import LinkButton from '@/components/LinkButton';
import Title from '@/components/Title';

const Home: React.FC = () => {
  return (
    <main className="bg-bg_primary">
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <Title text="thank you!" color="gray" classes="font-play-fair" />

          <div className="mt-4 text-gray">
            <p>回答のご協力ありがとうございました。</p>
            <LinkButton href="../" color="gray" variant="text">
              TOP画面に戻る
            </LinkButton>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
