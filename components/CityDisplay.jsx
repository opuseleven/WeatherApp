import { useState, useEffect } from 'react';

function CityDisplay({ city }) {

  const [lat, setLat] = useState(Number(city.lat));
  const [lon, setLon] = useState(Number(city.lon));
  const [latDir, setLatDir] = useState('N');
  const [lonDir, setLonDir] = useState('E');
  if (lat < 0) {
    setLatDir('S');
    setLat(lat * -1);
  }
  if (lon < 0) {
    setLonDir('W');
    setLon(lon * -1);
  }

  const [degreesLat, setDegreesLat] = useState(Math.floor(lat));
  const [degToMinLat, setDegToMinLat] = useState((lat - degreesLat) * 60);
  const [minutesLat, setMinutesLat] = useState(Math.floor(degToMinLat));
  const [secondsLat, setSecondsLat] = useState(Math.floor((degToMinLat - minutesLat) * 60));

  const [degreesLon, setDegreesLon] = useState(Math.floor(lon));
  const [degToMinLon, setDegToMinLon] = useState((lon - degreesLon) * 60);
  const [minutesLon, setMinutesLon] = useState(Math.floor(degToMinLon));
  const [secondsLon, setSecondsLon] = useState(Math.floor((degToMinLon - minutesLon) * 60));

  useEffect(() => {
    setLat(Number(city.lat));
    setLon(Number(city.lon));
    setLatDir('N');
    setLonDir('E');
    if (lat < 0) {
      setLatDir('S');
      setLat(lat * -1);
    }
    if (lon < 0) {
      setLonDir('W');
      setLon(lon * -1);
    }

    setDegreesLat(Math.floor(lat));
    setDegToMinLat((lat - degreesLat) * 60);
    setMinutesLat(Math.floor(degToMinLat));
    setSecondsLat(Math.floor((degToMinLat - minutesLat) * 60));

    setDegreesLon(Math.floor(lon));
    setDegToMinLon((lon - degreesLon) * 60);
    setMinutesLon(Math.floor(degToMinLon));
    setSecondsLon(Math.floor((degToMinLon - minutesLon) * 60));

  }, [city])

  return (
    <div>
      <h2>{city.name}</h2>
      <p>{lat}° {minutesLat}' {secondsLat}" {latDir} x {degreesLon}° {minutesLon}' {secondsLon}" {lonDir}</p>
    </div>
  );
}

export { CityDisplay };
