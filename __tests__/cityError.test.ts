import { cityError } from '../errors';

describe('cityError function', () => {

  it('Functions to return cityError message', () => {
    const testError = cityError();
    expect(testError.cod).toBe('Error');
    expect(testError.message).toBe(-1);
    expect(testError.list.length).toBeFalsy();
    expect(testError.city.id).toBe(-1);
    expect(testError.city.name).toBe('Error: Error finding that city.');
  })
})
