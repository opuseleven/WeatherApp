import { Day } from '../types';

function getDay(dayData: any) {
  const day: Day = {
    weather: dayData['weather'][0]['main'],
    temp: parseInt(String((dayData['main']['temp'] * 1.8 - 459.67)), 10),
    humidity: dayData['main']['humidity'],
    weatherDescription: dayData['weather'][0]['description'],
    precipitation: Number(dayData['pop']) * 100,
    weatherId: Number(dayData['weather'][0]['id'])
  }
  return day;
}
export { getDay };
