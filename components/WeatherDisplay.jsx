import { DayDisplay } from '.';
// import Day type & mapToDay()

function WeatherDisplay({ data }) {

  const weatherData = data['list'];
  const today = weatherData[0];
  const tomorrow = weatherData[1];
  const dayAfter = weatherData[2];

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
