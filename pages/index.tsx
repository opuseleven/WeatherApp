import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Banner, Info, Footer, WeatherDisplay, CityDisplay, useField } from '../components'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { getWeather } from '../services';
import { Weather } from '../types';
import tempData from '../data/testdata.json';

const Home: NextPage = () => {

  const [citySearch, setCitySearch] = useState<string>("Nashville");
  const [data, setData] = useState(tempData);
  const apiKey = process.env.REACT_APP_API_KEY;
  const searchInput = useField('text');

  function refreshData() {
    const newUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + citySearch + '&cnt=3&appid=' + apiKey;
    const testUrl = '/api/testdata' // only used for testing
    axios
      .request({url: newUrl}).then((response) => setData(response.data));
  }

  function handleClick(e: any) {
    e.preventDefault();
    setCitySearch(searchInput.value);
    refreshData();
  }

  useEffect(() => {
    refreshData()
  }, []); // hopefully removing [data] fixed refreshing bug. TEST.

  return (
    <div className={styles.container}>
      <Head>
        <title>WeatherApp</title>
        <meta name="description" content="WeatherApp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div className={styles.title}>
          <Banner />
        </div>
        <div>
          <Info />
        </div>

        <div>
          <form onSubmit={handleClick}>
            <input {...searchInput} />
            <button>Search</button>
          </form>
        </div>

        <div>
          {data && (
            <CityDisplay  data={data} />
          )}
        </div>

        <div>
          {data && (
            <WeatherDisplay data={data} />
            )
          }
        </div>

      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  )
}

export default Home
