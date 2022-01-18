import Image from 'next';
import { getWeatherImage } from '../services';
import { useState, useEffect } from 'react';

function DayDisplay({ day }) {

  const [weather, setWeather] = useState(day.weather);
  const [temp, setTemp] = useState(day.temp);
  const [humidity, setHumidity] = useState(day.humidity);
  const [weatherDescription, setWeatherDescription] = useState(day.weatherDescription);
  const [precipitation, setPrecipitation] = useState(day.precipitation);
  const [weatherId, setWeatherId] = useState(day.weatherId);
  const [weatherImage, setWeatherImage] = useState(getWeatherImage(weatherId));

  useEffect(() => {
    setWeather(day.weather);
    setTemp(day.temp);
    setHumidity(day.humidity);
    setWeatherDescription(day.weatherDescription);
    setPrecipitation(day.precipitation);
    setWeatherId(day.weatherId);
    setWeatherImage(getWeatherImage(weatherId));
  }, [day])

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
