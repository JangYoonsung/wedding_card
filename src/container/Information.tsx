import Card from '@/components/Card';
import Divider from '@/components/Divider';
import Title from '@/components/Title';

const Information = () => {
  const description = `※ご多用中恐縮に存じますが挙式にもご列席を賜りたく
開式の30分前までにお越しくださいますようお願い申し上げます`;

  return (
    <Card useAnimation showShadow classes="mt-4 mx-4">
      <Title text="WEDDING INFORMATION" color="primary" fontSize="2xl" classes="font-play-fair" />
      <Divider classes="my-2" />

      <div>
        <Title text="日付" color="primary" fontSize="lg" />
        <p className="text-lg text-gray">2024年09月06日（金）</p>
      </div>
      <Divider classes="my-2" />

      <div>
        <Title text="挙式" color="primary" fontSize="lg" />
        <p className="text-lg text-gray">午後12:30</p>
      </div>
      <Divider classes="my-2" />

      <div>
        <Title text="披露宴" color="primary" fontSize="lg" />
        <p className="text-lg text-gray">午後13:30</p>
      </div>
      <Divider classes="my-2" />

      <div className="break-words whitespace-pre-wrap py-2">
        <p className="text-sm text-gray">{description}</p>
      </div>
    </Card>
  );
};

export default Information;
