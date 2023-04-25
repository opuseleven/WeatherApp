import { Day, DayInterface } from '../types';
import { getDay, getWeatherImage, convertWindDegToDir } from '../services';

describe('Day class tests', () => {

  const testdata = require('../data/testdata.json');

  it('DayInterface functions to instantiate new Day', () => {
    const dayData = testdata['list'][1];
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
    expect(day.weather).toBe('Clear');
    expect(day.temp).toBe(56);
    expect(day.feels_like).toBe(51);
    expect(day.low_temp).toBe(54);
    expect(day.high_temp).toBe(56);
    expect(day.humidity).toBe(52);
    expect(day.weatherDescription).toBe('clear sky');
    expect(day.precipitation).toBe(0);
    expect(day.cloud_coverage).toBe(0);
    expect(day.wind_speed).toBe(1.47);
    expect(day.gusts).toBe(0);
    expect(day.wind_dir).toBe('SSE');
    expect(day.visibility).toBe(10000);
    expect(day.weatherId).toBe(800);
    expect(day.weatherImage).toBe('/weather-images/sunny.png');
    const day2 = new Day(dayInterface);
    expect(day.isSelected(day2)).toBe(true);
  })

  it('Day.isSelected() fails if days do not match', () => {
    const testDay = getDay(testdata['list'][0]);
    const testDay2 = getDay(testdata['list'][1]);
    const testDay3 = getDay(testdata['list'][2]);
    const testDay4 = getDay(testdata['list'][3]);
    expect(testDay.isSelected(testDay2)).toBe(false);
    expect(testDay2.isSelected(testDay3)).toBe(false);
    expect(testDay3.isSelected(testDay4)).toBe(false);
    expect(testDay4.isSelected(testDay)).toBe(false);
  })

  it('isSelected method returns true when days match', () => {
    const testDay = getDay(testdata['list'][3]);
    const matchDay = getDay(testdata['list'][3]);
    expect(testDay.isSelected(matchDay)).toBe(true);
  })

  it('isSelected method returns false when day is undefined', () => {
    const testDay = getDay(testdata['list'][2]);
    expect(testDay.isSelected(undefined)).toBe(false);
  })
})
