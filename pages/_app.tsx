import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { apiKey, getCity, getWeather } from '../services'
import { useField, SearchBar, CityDisplay, WeatherDisplay } from '../components'
import { useState, useEffect } from 'react'
import { City, Weather } from '../types'
import * as tempData from '../data/testdata.json'
import axios from 'axios'

function App({ Component, pageProps }: AppProps) {

  const initialData = tempData;
  const initialState = () => initialData;

  const searchInput = useField('text');
  const [data, setData] = useState(initialState);
  const initialCity: City = getCity(data['city']);
  const [city, setCity] = useState<City>(initialCity);
  const initialWeather = getWeather(data['list']);
  const [weather, setWeather] = useState<Weather>(initialWeather);

  function handleClick(e: any) {
    e.preventDefault();
    const searchString = searchInput.value;
    const url = 'http://api.openweathermap.org/data/2.5/forecast?q=' + searchString + '&cnt=3&appid=' + apiKey;
    axios
      .get(url)
      .then((response) => setData(response.data));
  }

  useEffect(() => {
    const newCity: City = getCity(data['city']);
    setCity(newCity);
    const newWeather: Weather = getWeather(data['list']);
    setWeather(newWeather);
  }, [data])

  return (
    <div>
      <Component {...pageProps} />
      <div>
        <form onSubmit={handleClick} >
          <input {...searchInput} />
          <button>Search</button>
        </form>
      </div>
      <div>
        <h3>{city.name}</h3>
        <h4>{weather.today.temp}</h4>
      </div>
//      <CityDisplay city={city} />
//      <WeatherDisplay weather={weather} />
    </div>
  );
}

export default App
