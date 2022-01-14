

function CityDisplay({ data }) {

  const cityData = data['city'];
  const cityName = cityData['name'];

  let lat = cityData['coord']['lat'];
  let lon = cityData['coord']['lon'];
  let latDir = 'N';
  let lonDir = 'E';
  if (lat < 0) {
    latDir = 'S';
    lat = lat * -1;
  }
  if (lon < 0) {
    lonDir = 'W';
    lon = lon * -1;
  }

  const degreesLat = Math.floor(lat);
  const degToMinLat = (lat - degreesLat) * 60;
  const minutesLat = Math.floor(degToMinLat);
  const secondsLat = Math.floor((degToMinLat - minutesLat) * 60);

  const degreesLon = Math.floor(lon);
  const degToMinLon = (lon - degreesLon) * 60;
  const minutesLon = Math.floor(degToMinLon);
  const secondsLon = Math.floor((degToMinLon - minutesLon) * 60);

  return (
    <div>
      <h2>{cityName}</h2>
      <p>{degreesLat}° {minutesLat}' {secondsLat}" {latDir} x {degreesLon}° {minutesLon}' {secondsLon}" {lonDir}</p>
    </div>
  );
}

export { CityDisplay };
