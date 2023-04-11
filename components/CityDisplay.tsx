import { useState, useEffect } from 'react';
import { getCity } from '../services';
import { ApiData, City } from '../types';

interface CityDisplayProps {
  data: ApiData
}

const CityDisplay: React.FC<CityDisplayProps> = ({ data }) => {

  const [city, setCity] = useState<City | undefined>();
  const [displayedCoords, setDisplayedCoords] = useState<string>('');

  useEffect(() => {
    const newCity = getCity(data['city']);
    setCity(newCity);
    setDisplayedCoords(getDisplayedCoords(newCity));
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

  return (
    <div>
      {
        city && (
          <div>
            <h2>{city.name}</h2>
            <h4>{displayedCoords}</h4>
          </div>
        )
      }
    </div>
  );
}

export { CityDisplay };
