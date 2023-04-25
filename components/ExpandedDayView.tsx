import { FC } from 'react';
import { Day } from '../types';
import styles from '../styles/Components.module.css';

interface ExpandedDayViewProps {
  day: Day
}

const ExpandedDayView: FC<ExpandedDayViewProps> = ({ day }) => {

  function handlePercent(str: string) {
    return Math.round(Number(str) * 100) / 100;
  }

  function mpsToMph(str: string) {
    return handlePercent(String(Number(str) * 2.23694));
  }

  return (
    <div>
      <h3>{day.weather}</h3>
      <p role="detail" className={styles.capitalize}>{day.weatherDescription}</p>
      <p role="detail">High Temp: {day.high_temp}°F</p>
      <p role="detail">Low Temp: {day.low_temp}°F</p>
      <p role="detail">Feels Like: {day.feels_like}°F</p>
      <p role="detail">Humidity: {handlePercent(day.humidity)}%</p>
      <p role="detail">Precipitation: {handlePercent(String(day.precipitation))}%</p>
      <p role="detail">Cloud Coverage: {day.cloud_coverage}%</p>
      <p role="detail">Wind Speed: {mpsToMph(String(day.wind_speed))} mph</p>
      <p role="detail">Gusts: {mpsToMph(String(day.gusts))} mph</p>
      <p role="detail">Wind Direction: {day.wind_dir}</p>
      <p role="detail">Visibility: {day.visibility} m</p>
    </div>
  )
}
export { ExpandedDayView };
