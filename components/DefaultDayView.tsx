import { FC } from 'react';
import { Day } from '../types';

interface DefaultDayViewProps {
  day: Day
}

const DefaultDayView: FC<DefaultDayViewProps> = ({ day }) => {

  function handlePercent(str: string) {
    return Math.round(Number(str) * 100) / 100;
  }

  return (
    <div>
      <h3>{day.weather}</h3>
      <p>{day.weatherDescription.charAt(0).toUpperCase()}</p>
      <p>Temperature: {day.temp}°F</p>
      <p>Humidity: {handlePercent(day.humidity)}%</p>
      <p>Precipitation: {handlePercent(String(day.precipitation))}%</p>
    </div>
  )
}
export { DefaultDayView };
