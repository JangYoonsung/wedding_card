import LinkButton from '@/components/LinkButton';
import Map from '@/container/Map';

const Home = () => {
  return (
    <main className="m-4">
      <Map />
      <LinkButton href="/reply-form">招待状に回答する</LinkButton>
    </main>
  );
};

export default Home;
