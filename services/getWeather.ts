import { Weather } from '../types';
import { getDay } from '.';

function getWeather(data: any) {
  const weather: Weather = {
    today: getDay(data[0]),
    tomorrow: getDay(data[1]),
    dayAfter: getDay(data[2])
  }
  return weather;
}
export { getWeather };
