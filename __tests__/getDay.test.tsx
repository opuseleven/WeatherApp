import { getDay } from '../services';
import { Day } from '../types';

describe('getDay function', () => {

  const testdata = require('../data/testdata.json');
  const weatherData = testdata['list'];

  it('Returns a Day object', () => {
    const day: Day = getDay(weatherData[0]);
    expect(day.weather).toBe(weatherData[0]['weather'][0]['main']);
    expect(day.temp).toBe(parseInt(String((weatherData[0]['main']['temp'] * 1.8 - 459.67)), 10));
    expect(day.humidity).toBe(weatherData[0]['main']['humidity']);
    expect(day.weatherDescription).toBe(weatherData[0]['weather'][0]['description']);
    expect(day.precipitation).toBe(Number(weatherData[0]['pop']) * 100);
    expect(day.weatherId).toBe(800);
    expect(day.weatherImage).toBe('/weather-images/sunny.png');
  })
})
