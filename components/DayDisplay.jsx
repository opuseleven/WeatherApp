import Image from 'next';
import { getWeatherImage } from '../services';

function DayDisplay({ day }) {

  const weather = day['weather'][0]['main'];
  const temp = parseInt((day['main']['temp'] * 1.8 - 459.67), 10);
  const humidity = day['main']['humidity'];
  const weatherDescription = day['weather'][0]['description'];
  const precipitation = Number(day['pop']) * 100;
  const weatherId = parseInt(day['weather'][0]['id']);

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
