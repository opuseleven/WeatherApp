import { getCity } from '../services';
import { City } from '../types';

describe('getDay function', () => {

  const testdata = require('../data/testdata.json');
  const cityData = testdata['city'];

  it('Function returns a City object', () => {
    const testCity: City = getCity(cityData);
    expect(testCity.name).toBe('Nashville');
    expect(testCity.lat).toBe(36.165900000000001);
    expect(testCity.lon).toBe(-86.784400000000005);
  })
})
