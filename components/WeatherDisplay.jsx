import { DayDisplay } from '.';
// import Day type & mapToDay()

function WeatherDisplay({ weather }) {

  const today = weather.today;
  const tomorrow = weather.tomorrow;
  const dayAfter = weather.dayAfter;

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
