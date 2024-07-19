import Card from '@/components/Card';
import Title from '@/components/Title';
import '@/style/animation.css';
import '@/style/top.css';
import React from 'react';

const Top: React.FC = () => {
  return (
    <Card classes="top-container text-shadow">
      <div className="z-10 font-bold">
        <Title text="YOONSUNG & JUAN" color="white" classes="typing" />
        <h2 className="top-title mt-4">WE RE GETTING MARRIED</h2>
        <h2 className="top-title">PLEASE US TO CELEBRATION</h2>
        <h2 className="top-title mt-4">2024. 09. 06. FRI PM12:30</h2>
      </div>
    </Card>
  );
};

export default Top;
