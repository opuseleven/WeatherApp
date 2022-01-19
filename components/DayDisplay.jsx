import Image from 'next';
import { useState, useEffect } from 'react';

function DayDisplay({ weather, temp, humidity, precip }) {

  const [mainWeather, setMainWeather] = useState();
  const [temperature, setTemperature] = useState();
  const [humid, setHumid] = useState();
  const [pop, setPop] = useState();

  useEffect(() => {
    setMainWeather(weather);
    setTemperature(temp);
    setHumid(humidity);
    setPop(precip);
  })

  return (
    <div>
      <h3>{weatherMain}</h3>
      <p>Temperature: {temperature}°F</p>
      <p>Humidity: {humid}%</p>
      <p>Precipitation: {pop}%</p>
    </div>
  );
}
export { DayDisplay };
