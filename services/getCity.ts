import { City } from '../types';

function getCity(cityData: any) {
  const city: City = {
    name: cityData['name'],
    lat: cityData['coord']['lat'],
    lon: cityData['coord']['lon']
  }
  return city;
}
export { getCity };
