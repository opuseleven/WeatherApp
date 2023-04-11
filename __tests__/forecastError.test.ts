import { forecastError } from '../errors';

describe('forecastError function', () => {

  it('Functions to return forecastError message', () => {
    const testError = forecastError();
    expect(testError.cod).toBe('Error');
    expect(testError.message).toBe(-1);
    expect(testError.list.length).toBe(0);
    expect(testError.city.id).toBe(-1);
    expect(testError.city.name).toBe('Error: Error retrieving forecast.');
  })
})
