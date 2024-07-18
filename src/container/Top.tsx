import Card from '@/components/Card';
import Title from '@/components/Title';

const Top = () => {
  const textStyle = 'text-white text-left text-lg text-shadow w-fit hidden whitespace-nowrap';

  return (
    <Card classes="h-screen flex items-center justify-center !bg-cover before:content-[''] before:w-full before:h-full before:min-h-[30rem] before:absolute before:top-o before:left-0">
      <div className="z-10 font-bold">
        <Title text="YOONSUNG & JUAN" color="white" classes="text-4xl text-center" />
        <p className={`${textStyle} mt-4`}>WE'RE GETTING MARRIED</p>
        <p className={`${textStyle}`}>PLEASE US TO CELEBRATION</p>
        <p className={`${textStyle} mt-4`}>2024. 09. 06. FRI PM12:30</p>
      </div>
    </Card>
  );
};

export default Top;
