import DayDisplay from '.';
import { useState, useEffect } from 'react';
// import Day type & mapTo

function WeatherDisplay({ weather }) {

  const [today, setToday] = useState(weather.today);
  const [tomorrow, setTomorrow] = useState(weather.tomorrow);
  const [dayAfter, setDayAfter] = useState(weather.dayAfter);

  useEffect(() => {
    setToday(weather.today);
    setTomorrow(weather.tomorrow);
    setDayAfter(weather.dayAfter);
  }, [weather]);

  return (
    <div>
      <div>
        <h3>Today:</h3>
        <hr />
        <DayDisplay day={today} />
      </div>
      <div>
        <h3>Tomorrow:</h3>
        <hr />
        <DayDisplay day={tomorrow} />
      </div>
      <div>
        <h3>Day After:</h3>
        <hr />
        <DayDisplay day={dayAfter} />
      </div>
    </div>
  );
}
export { WeatherDisplay };
