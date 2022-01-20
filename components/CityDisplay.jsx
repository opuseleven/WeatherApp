import { useState, useEffect } from 'react';
import { getCity } from '../services';

function CityDisplay({ data }) {

  const [city, setCity] = useState(null);

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
