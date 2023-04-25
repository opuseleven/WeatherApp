import { Day, DayInterface } from '../types';
import { getWeatherImage, convertWindDegToDir } from '../services';

function getDay(dayData: any) {

  const idString: any = dayData['weather'][0]['id'];
  const image: string = getWeatherImage(idString);

  const dayInterface: DayInterface = {
    weather: dayData['weather'][0]['main'],
    temp: parseInt(String((dayData['main']['temp'] * 1.8 - 459.67)), 10),
    feels_like: parseInt(String((dayData['main']['feels_like'] * 1.8 - 459.67)), 10),
    low_temp: parseInt(String((dayData['main']['temp_min'] * 1.8 - 459.67)), 10),
    high_temp: parseInt(String((dayData['main']['temp_max'] * 1.8 - 459.67)), 10),
    humidity: dayData['main']['humidity'],
    weatherDescription: dayData['weather'][0]['description'],
    precipitation: Number(dayData['pop']) * 100,
    cloud_coverage: dayData['clouds']['all'],
    wind_speed: dayData['wind']['speed'],
    gusts: dayData['wind']['gust'],
    wind_dir: convertWindDegToDir(dayData['wind']['deg']),
    visibility: dayData['visibility'],
    weatherId: Number(dayData['weather'][0]['id']),
    weatherImage: `/weather-images/` + image
  }
  const day = new Day(dayInterface);
  return day;
}
export { getDay };
