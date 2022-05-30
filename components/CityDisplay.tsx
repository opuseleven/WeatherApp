import { useState, useEffect } from 'react';
import { getCity } from '../services';
import { ApiData, City } from '../types';

interface CityDisplayProps {
  data: ApiData
}

const CityDisplay: React.FC<CityDisplayProps> = ({ data }) => {

  const [city, setCity] = useState<City | undefined>();

  useEffect(() => {
    const newCity = getCity(data['city']);
    setCity(newCity);
  }, [data])

  return (
    <div>
      {
        city && (
          <div>
            <h2>{city.name}</h2>
            <p>{data['city']['coord']['lat']}° {data['city']['coord']['lon']}</p>
          </div>
        )
      }
    </div>
  );
}

export { CityDisplay };
