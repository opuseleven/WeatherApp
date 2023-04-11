import { ApiData } from '../types';

const forecastError = () => {
  const returnError: ApiData = {
    cod: "Error",
    message: -1,
    cnt: -1,
    list: [],
    city: {
      id: -1,
      name: "Error: Error retrieving forecast.",
      coord: {
        lat: 0,
        lon: 0,
      },
      country: "",
      population: -1,
      timezone: -1,
      sunrise: -1,
      sunset: -1
    }
  }
  return returnError;
}
export { forecastError };
