import { useState, useEffect } from 'react';
import { getCity } from '../services';
import { ApiData, City } from '../types';
import styles from '../styles/Components.module.css';

interface CityDisplayProps {
  data: ApiData
}

const CityDisplay: React.FC<CityDisplayProps> = ({ data }) => {

  const [city, setCity] = useState<City | undefined>();
  const [displayedCoords, setDisplayedCoords] = useState<string>('');
  const [sunrise, setSunrise] = useState<string>('');
  const [sunset, setSunset] = useState<string>('');

  useEffect(() => {
    const newCity = getCity(data['city']);
    setCity(newCity);
    setDisplayedCoords(getDisplayedCoords(newCity));
    const sunriseSunset = getSunriseSunset(data);
    setSunrise(convertTo12HourTime(sunriseSunset[0]));
    setSunset(convertTo12HourTime(sunriseSunset[1]));
  }, [data])

  function getDisplayedCoords(city: City) {
    let coords = city.lat + '°';
    if (Number(city.lat) > 0) {
      coords = coords + 'N ';
    } else {
      coords = coords + 'S ';
    }
    coords = coords + 'x ' + city.lon + '°';
    if (Number(city.lon) > 0) {
      coords = coords + 'E';
    } else {
      coords = coords + 'W';
    }
    return coords;
  }

  function getSunriseSunset(data: ApiData) {
    let rise = '';
    let set = '';
    function getTime(d: Date) {
      const hours = d.getHours();
      let minutes = String(d.getMinutes());
      if (minutes.length != 2) {
        minutes = '0' + minutes;
      }
      return hours + ':' + minutes;
    }
    const sunriseDate = new Date(data['city']['sunrise'] * 1000);
    const sunsetDate = new Date(data['city']['sunset'] * 1000);
    rise = getTime(sunriseDate);
    set = getTime(sunsetDate);
    return [rise, set];
  }

  function convertTo12HourTime(time: string) {
    let returnTime = '';
    let [hours, minutes] = time.split(':');
    let period = 'AM';
    if (Number(hours) > 11) {
      period = 'PM';
      hours = String(Number(hours) - 12);
    }
    returnTime = hours + ':' + minutes + period;
    return returnTime;
  }

  return (
    <div>
      {
        city && (
          <div className={styles.citydisplaycontainer}>
            <h2>{city.name}</h2>
            <h4>{displayedCoords}</h4>
            <h5>Sunrise: {sunrise} <hr />  Sunset: {sunset}</h5>
          </div>
        )
      }
    </div>
  );
}

export { CityDisplay };
