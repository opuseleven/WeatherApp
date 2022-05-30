import { WeatherData } from '../types';

export interface ApiData {
  cod: string,
  message: number,
  cnt: number,
  list: WeatherData[],
  city: {
    id: number,
    name: string,
    coord: {
      lat: number,
      lon: number
    },
    country: string,
    population: number,
    timezone: number,
    sunrise: number,
    sunset: number
  }
}
