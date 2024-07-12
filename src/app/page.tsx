import LinkButton from '@/components/LinkButton';
import CardForm from '@/container/CardForm';

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <CardForm />
      <LinkButton href="/hoge">go</LinkButton>
    </main>
  );
};

export default Home;
