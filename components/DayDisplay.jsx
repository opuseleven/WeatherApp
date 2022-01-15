import Image from 'next';
import { getWeatherImage } from '../services';

function DayDisplay({ day }) {

  const weather = day.weather;
  const temp = day.temp;
  const humidity = day.humidity;
  const weatherDescription = day.weatherDescription;
  const precipitation = day.precipitation;
  const weatherId = day.weatherId;

  const weatherImage = getWeatherImage(weatherId);

  return (
    <div>
      <h3>{weather}</h3>
      <Image src={weatherImage} alt={weatherDescription} />
      <p>Temperature: {temp}°F</p>
      <p>Humidity: {humidity}%</p>
      <p>Precipitation: {precipitation}%</p>
    </div>
  );
}
export { DayDisplay };
