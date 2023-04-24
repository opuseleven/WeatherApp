import { useState, useEffect } from 'react';
import { getDay } from '../services';
import styles from '../styles/Home.module.css';
import { RenderImage, DefaultDayView } from '../components';
import { ApiData, Day } from '../types';

interface WeatherDisplayProps {
  data: ApiData
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ data }) => {

  const [today, setToday] = useState<Day | undefined>();
  const [tomorrow, setTomorrow] = useState<Day | undefined>();
  const [dayAfter, setDayAfter] = useState<Day | undefined>();

  useEffect(() => {
    if (data['list'].length) {
      const weatherData = data['list'];
      const todayDay = getDay(weatherData[0]);
      const tomorrowDay = getDay(weatherData[1]);
      const dayAfterDay = getDay(weatherData[2]);
      setToday(todayDay);
      setTomorrow(tomorrowDay);
      setDayAfter(dayAfterDay);
    } else {
      setToday(undefined);
      setTomorrow(undefined);
      setDayAfter(undefined);
    }
  }, [data]);

  return (
    <div className={styles.grid}>
      <div className={styles.card}>
        <h3>Today:</h3>
        <div>
          {
            today && (
              <RenderImage image={today.weatherImage} alt={today.weatherDescription} />
            )
          }
        </div>
        <hr />
        <div>
          {
            today && (
              <DefaultDayView day={today} />
            )
          }
        </div>
      </div>
      <div className={styles.card}>
        <h3>Tomorrow:</h3>
        <div>
          {
            tomorrow && (
              <RenderImage image={tomorrow.weatherImage} alt={tomorrow.weatherDescription} />
            )
          }
        </div>
        <hr />
        <div>
          {
            tomorrow && (
              <DefaultDayView day={tomorrow} />
            )
          }
        </div>
      </div>
      <div className={styles.card}>
        <h3>Day After:</h3>
        <div>
          {
            dayAfter && (
              <RenderImage image={dayAfter.weatherImage} alt={dayAfter.weatherDescription} />
            )
          }
        </div>
        <hr />
        <div>
          {
            dayAfter && (
              <DefaultDayView day={dayAfter} />
            )
          }
        </div>
      </div>
    </div>
  );
}
export { WeatherDisplay };
