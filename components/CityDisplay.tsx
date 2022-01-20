import { useState, useEffect } from 'react';
import { City } from '../types';
import { getCity } from '../services';

function CityDisplay({ data }) {

  const [city, setCity] = useState<City>();

  useEffect(() => {
    const newCity: City = getCity(data['city']);
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
