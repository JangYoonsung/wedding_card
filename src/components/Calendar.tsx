import dayjs from 'dayjs';
import React from 'react';
import Divider from './Divider';

const Calendar: React.FC = () => {
  const today = dayjs('2024-09-06');

  const generateCalendar = (year: number, month: number): { day: number; key: string }[][] => {
    const firstDayOfMonth = dayjs(new Date(year, month, 1)).day();
    const daysInMonth = dayjs(new Date(year, month + 1, 0)).date();
    const calendar = [];

    let week = new Array(firstDayOfMonth).fill(null);
    const lastDayInWeek = 7;

    for (let day = 1; day <= daysInMonth; day += 1) {
      week.push({ day, key: `${year}-${month + 1}-${day}` });

      if (week.length === lastDayInWeek) {
        calendar.push(week);
        week = [];
      }
    }
    if (week.length > 0) calendar.push(week);

    return calendar;
  };

  const calendar = generateCalendar(today.year(), today.month());
  const daysOfWeek = ['日', '月', '火', '水', '木', '金', '土'];

  return (
    <div className="px-6 py-4">
      <div className="grid grid-cols-7 text-center">
        {daysOfWeek.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <Divider classes="my-4" color="white" />
      <div className="grid grid-cols-7 text-center">
        {calendar.map((week) =>
          week.map(({ day, key }) => (
            <div key={key} className="p-2">
              {day && (
                <div className={`p-2 ${day === today.date() ? 'bg-primary rounded-full' : ''}`}>
                  {day}
                </div>
              )}
            </div>
          )),
        )}
      </div>
      <Divider classes="my-4" color="white" />
    </div>
  );
};

export default Calendar;
