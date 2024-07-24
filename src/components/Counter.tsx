'use client';

import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { useEffect, useState } from 'react';
import Title from './Title';

dayjs.extend(duration);

const calculateDay = (targetDate: string) => {
  const now = dayjs();
  const target = dayjs(targetDate);
  const calculate = dayjs.duration(target.diff(now));

  if (calculate.asMilliseconds() < 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(calculate.asDays()),
    hours: calculate.hours(),
    minutes: calculate.minutes(),
    seconds: calculate.seconds(),
  };
};

const Counter: React.FC = () => {
  const targetDate: string = '2024-09-06';

  const [timeLeft, setTimeLeft] = useState(calculateDay(targetDate));
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  useEffect(() => {
    if (!isClient) return;

    const intervalId = setInterval(() => {
      setTimeLeft(calculateDay(targetDate));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isClient, targetDate]);

  if (!isClient) return null;

  return (
    <div className="flex justify-center items-center gap-10">
      <div className="grid">
        <Title text={`${timeLeft.days}`} color="white" classes="font-play-fair" fontSize="2xl" />
        <p>日</p>
      </div>
      <div className="grid">
        <Title text={`${timeLeft.hours}`} color="white" classes="font-play-fair" fontSize="2xl" />
        <p>時間</p>
      </div>
      <div className="grid">
        <Title text={`${timeLeft.minutes}`} color="white" classes="font-play-fair" fontSize="2xl" />
        <p>分</p>
      </div>
      <div className="grid">
        <Title text={`${timeLeft.seconds}`} color="white" classes="font-play-fair" fontSize="2xl" />
        <p>秒</p>
      </div>
    </div>
  );
};

export default Counter;
