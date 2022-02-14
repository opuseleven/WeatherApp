import { useState, useEffect } from 'react';
import { getDay } from '../services';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { getWeatherImage } from '../services';

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
    <div className={styles.grid}>
      <div className={styles.card}>
        <h3>Today:</h3>
        <div className={styles.imagecontainer}>
          {
            today && (
              <Image src={getWeatherImage(today.weatherId)} alt={today.weatherDescription} width={50} height={50} />
            )
          }
        </div>
        <hr />
        <div>
          {
            today && (
              <div>
                <h3>{today.weather}</h3>
                <p>{today.weatherId}</p>
                <p>{today.weatherDescription}</p>
                <p>Temperature: {today.temp}°F</p>
                <p>Humidity: {today.humidity}%</p>
                <p>Precipitation: {today.precipitation}%</p>
              </div>
            )
          }
        </div>
      </div>
      <div className={styles.card}>
        <h3>Tomorrow:</h3>
        <div className={styles.imagecontainer}>
          {
            tomorrow && (
              <Image src={getWeatherImage(tomorrow.weatherId)} alt={tomorrow.weatherDescription} width={50} height={50} />
            )
          }
        </div>
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
      <div className={styles.card}>
        <h3>Day After:</h3>
        <div className={styles.imagecontainer}>
          {
            dayAfter && (
              <Image src={getWeatherImage(dayAfter.weatherId)} alt={dayAfter.weatherDescription} width={50} height={50} />
            )
          }
        </div>
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
