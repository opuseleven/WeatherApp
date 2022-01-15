import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { apiKey, getCity, getWeather } from '../services'
import { useField, SearchBar, CityDisplay, WeatherDisplay } from '../components'
import { useState } from 'react'
import * as tempData from '../data/testdata.json'
import axios from 'axios'

function App({ Component, pageProps }: AppProps) {

  const searchInput = useField('text');
  const [data, setData] = useState(tempData);

  function handleClick(e: any) {
    e.preventDefault();
    const searchString = searchInput.value;
    const url = 'http://api.openweathermap.org/data/2.5/forecast?q=' + searchString + '&cnt=3&appid=' + apiKey;
    axios
      .get(url)
      .then((response) => setData(response.data));
  }

  return (
    <div>
      <Component {...pageProps} />
      <SearchBar handleClick={handleClick} searchInput={searchInput} />
      <CityDisplay city={getCity(data['city'])} />
      <WeatherDisplay weather={getWeather(data['list'])} />
    </div>
  );
}

export default App
