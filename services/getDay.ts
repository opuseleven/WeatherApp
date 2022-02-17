import { Day } from '../types';
import { getWeatherImage } from '../services';

function getDay(dayData: any) {

  const idString: any = dayData['weather'][0]['id'];
  const image: string = getWeatherImage(idString);

  const day: Day = {
    weather: dayData['weather'][0]['main'],
    temp: parseInt(String((dayData['main']['temp'] * 1.8 - 459.67)), 10),
    humidity: dayData['main']['humidity'],
    weatherDescription: dayData['weather'][0]['description'],
    precipitation: Number(dayData['pop']) * 100,
    weatherId: Number(dayData['weather'][0]['id']),
    weatherImage: '/../public/weather-images/' + image
  }
  return day;
}
export { getDay };
