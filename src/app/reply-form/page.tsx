import CardForm from '@/container/CardForm';

const Home = () => {
  const description = `お手数ではございますが
下記お日にち迄に
出欠のご回答をくださいますよう
お願い申し上げます

また帰日までのご回答が難しい場合には
ご一報いただけますと幸いです
  `;
  return (
    <div className="m-4">
      <h1 className="text-center text-primary font-bold">Wedding Invitation</h1>
      <h2 className="text-center">Yoonsung & Juan</h2>

      <div className="text-sm pt-4 text-center text-gray whitespace-pre">{description}</div>

      <p className="font-bold text-gray text-center">2024年8月9日（金）</p>
      <CardForm />
    </div>
  );
};

export default Home;
