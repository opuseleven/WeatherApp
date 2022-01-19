import Image from 'next';
import { useState, useEffect } from 'react';

function DayDisplay({ day }) {

  const [dayData, setDayData] = useState();

  useEffect(() => {
    setDayData(day);
  }, [day]);

  return (
    <div>
      <h3>{dayData['weather']['main']}</h3>
      <p>Temperature: {dayData['main']['temp']}°F</p>
      <p>Humidity: {dayData['main']['humidity']}%</p>
      <p>Precipitation: {dayData['pop']}%</p>
    </div>
  );
}
export { DayDisplay };
