import Card from '@/components/Card';
import Title from '@/components/Title';
import '@/style/animation.css';
import '@/style/top.css';

const Top = () => {
  const textStyle = 'text-white text-left text-lg text-shadow';

  return (
    <Card classes="top-container">
      <div className="z-10 font-bold">
        <Title text="YOONSUNG & JUAN" color="white" classes="typing" />
        <p className="top-title mt-4">WE'RE GETTING MARRIED</p>
        <p className="top-title">PLEASE US TO CELEBRATION</p>
        <p className="top-title mt-4">2024. 09. 06. FRI PM12:30</p>
      </div>
    </Card>
  );
};

export default Top;
