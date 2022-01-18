import DayDisplay from '.';
import { useState, useEffect } from 'react';
// import Day type & mapTo

function WeatherDisplay({ weather }) {

  const [ state, setState ] = useState;

  useEffect(() => {
    const today = weather.today;
    const tomorrow = weather.tomorrow;
    const dayAfter = weather.dayAfter;

  }, [weather, state]);

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
