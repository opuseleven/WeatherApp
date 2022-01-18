import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { apiKey, getCity, getWeather } from '../services'
import { useField, SearchBar, CityDisplay, WeatherDisplay } from '../components'
import { useState, useEffect } from 'react'
import * as tempData from '../data/testdata.json'
import axios from 'axios'

function App({ Component, pageProps }: AppProps) {

  const searchInput = useField('text');
  const [data, setData] = useState(tempData);
  const [city, setCity] = useState(getCity(data['city']));
  const [weather, setWeather] = useState(getWeather(data['list']));

  function handleClick(e: any) {
    e.preventDefault();
    const searchString = searchInput.value;
    const url = 'http://api.openweathermap.org/data/2.5/forecast?q=' + searchString + '&cnt=3&appid=' + apiKey;
    axios
      .get(url)
      .then((response) => setData(response.data));
  }

  useEffect(() => {
    setCity(getCity(data['city']));
    setWeather(getWeather(data['list']));
  }, [data])

  return (
    <div>
      <Component {...pageProps} />
      <div>
        <form onSubmit={handleClick} value={searchInput}>
          <input {...searchInput} />
          <button>Search</button>
        </form>
      </div>
      <CityDisplay city={city} />
      <WeatherDisplay weather={weather} />
    </div>
  );
}

export default App
