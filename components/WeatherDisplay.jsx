import { useState, useEffect } from 'react';

function WeatherDisplay({ data }) {

  const [today, setToday] = useState(null);
  const [tomorrow, setTomorrow] = useState(null);
  const [dayAfter, setDayAfter] = useState(null);

  useEffect(() => {
    const weatherData = data['list'];
    setToday(weatherData[0]);
    setTomorrow(weatherData[1]);
    setDayAfter(weatherData[2]);
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
                <h3>{today['weather']['main']}</h3>
                <p>Temperature: {today['main']['temp']}°F</p>
                <p>Humidity: {today['main']['humidity']}%</p>
                <p>Precipitation: {today['pop']}%</p>
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
                <h3>{tomorrow['weather']['main']}</h3>
                <p>Temperature: {tomorrow['main']['temp']}°F</p>
                <p>Humidity: {tomorrow['main']['humidity']}%</p>
                <p>Precipitation: {tomorrow['pop']}%</p>
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
                <h3>{dayAfter['weather']['main']}</h3>
                <p>Temperature: {dayAfter['main']['temp']}°F</p>
                <p>Humidity: {dayAfter['main']['humidity']}%</p>
                <p>Precipitation: {dayAfter['pop']}%</p>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}
export { WeatherDisplay };
