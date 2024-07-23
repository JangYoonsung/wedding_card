import AnimationWrapper from '@/components/AnimationWrapper';
import Card from '@/components/Card';
import Divider from '@/components/Divider';
import LinkButton from '@/components/LinkButton';

const FormLink: React.FC = () => {
  return (
    <AnimationWrapper>
      <Card color="secondary" classes="text-white mb-[15rem]">
        <Divider classes="my-4" color="var(--primary)" />

        <div className="whitespace-pre">
          <p className="text-sm py-4">{`ご出欠のご返信は郵送に変わり
下記ボタンよりフォームへアクセスいただき
ご返信をお願い申し上げます`}</p>
        </div>
        <Divider classes="my-4" color="var(--primary)" />
        <LinkButton href="/reply-form" variant="outline" color="primary">
          招待状に回答する
        </LinkButton>
      </Card>
    </AnimationWrapper>
  );
};

export default FormLink;
