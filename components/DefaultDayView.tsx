import { FC } from 'react';
import { Day } from '../types';
import styles from '../styles/Components.module.css';

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
      <p role='detail' className={styles.capitalize}>
        {day.weatherDescription}
      </p>
      <p role='detail'>Temperature: {day.temp}°F</p>
      <p role='detail'>Humidity: {handlePercent(day.humidity)}%</p>
      <p role='detail'>Precipitation: {handlePercent(String(day.precipitation))}%</p>
    </div>
  )
}
export { DefaultDayView };
