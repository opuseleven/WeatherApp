import { getWeather } from '../services';

describe('getWeather Service', () => {

  const testdata = require('../data/testdata.json');

  it('Functions to return a weather obj from the given data', () => {
    const test = getWeather(testdata['list']);
    expect(test.today.high_temp).toBe(61);
    expect(test.tomorrow.low_temp).toBe(54);
    expect(test.dayAfter.cloud_coverage).toBe(1);
  })

  it('Additional test', () => {
    const test = getWeather(testdata['list']);
    expect(test.today.humidity).toBe(31);
    expect(test.tomorrow.feels_like).toBe(51);
    expect(test.dayAfter.gusts).toBe(4.21);
    expect(test.today.wind_dir).toBe('SSE');
    expect(test.tomorrow.weatherId).toBe(800);
    expect(test.dayAfter.weatherImage).toBe('/weather-images/sunny.png');
  })
})
