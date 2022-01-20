import { useState, useEffect } from 'react';
import { getDay } from '../services';

function WeatherDisplay({ data }) {

  const [today, setToday] = useState(null);
  const [tomorrow, setTomorrow] = useState(null);
  const [dayAfter, setDayAfter] = useState(null);

  useEffect(() => {
    const weatherData = data['list'];
    const todayDay = getDay(weatherData[0]);
    const tomorrowDay = getDay(weatherData[1]);
    const dayAfterDay = getDay(weatherData[2]);
    setToday(todayDay);
    setTomorrow(tomorrowDay);
    setDayAfter(dayAfterDay);
  }, [data]);

  return (
    <div>
      <div>
        <h3>Today:</h3>
        <hr />
        <div>
          {
            today && (
              <div>
                <h3>{today.weather}</h3>
                <p>Temperature: {today.temp}°F</p>
                <p>Humidity: {today.humidity}%</p>
                <p>Precipitation: {today.precipitation}%</p>
              </div>
            )
          }
        </div>
      </div>
      <div>
        <h3>Tomorrow:</h3>
        <hr />
        <div>
          {
            tomorrow && (
              <div>
                <h3>{tomorrow.weather}</h3>
                <p>Temperature: {tomorrow.temp}°F</p>
                <p>Humidity: {tomorrow.humidity}%</p>
                <p>Precipitation: {tomorrow.precipitation}%</p>
              </div>
            )
          }
        </div>
      </div>
      <div>
        <h3>Day After:</h3>
        <hr />
        <div>
          {
            dayAfter && (
              <div>
                <h3>{dayAfter.weather}</h3>
                <p>Temperature: {dayAfter.temp}°F</p>
                <p>Humidity: {dayAfter.humidity}%</p>
                <p>Precipitation: {dayAfter.precipitation}%</p>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}
export { WeatherDisplay };
