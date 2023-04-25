import { FC } from 'react';
import { Day } from '../types';

interface ExpandedDayViewProps {
  day: Day
}

const ExpandedDayView: FC<ExpandedDayViewProps> = ({ day }) => {

  function handlePercent(str: string) {
    return Math.round(Number(str) * 100) / 100;
  }

  return (
    <div>
      <h3>{day.weather}</h3>
      <p>{day.weatherDescription.charAt(0).toUpperCase()}</p>
      <p>Current Temp: {day.temp}°F</p>
      <p>Feels Like: {day.feels_like}</p>
      <p>High Temp: {day.high_temp}°F</p>
      <p>Low Temp: {day.low_temp}°F</p>
      <p>Humidity: {handlePercent(day.humidity)}%</p>
      <p>Precipitation: {handlePercent(String(day.precipitation))}</p>
      <p>Cloud Coverage: {day.cloud_coverage}</p>
      <p>Wind Speed: {day.wind_speed}</p>
      <p>Gusts: {day.gusts}</p>
      <p>Visibility: {day.visibility}</p>
    </div>
  )
}
export { ExpandedDayView };
