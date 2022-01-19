import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Banner, Info, Footer, WeatherDisplay, CityDisplay } from '../components'
import { useState, useEffect } from 'react'
import axios from 'axios'
import tempData from '../data/testdata.json'

const Home: NextPage = () => {

  const [citySearch, setCitySearch] = useState("Nashville");
  const [data, setData] = useState(tempData);
  const apiKey = process.env.REACT_APP_API_KEY;

  function refreshData() {
    const newUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + citySearch + '&cnt=3&appid=' + apiKey;
    axios
      .request({url: newUrl}).then((response) => setData(response.data));
  }

  useEffect(() => {
    refreshData()
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>WeatherApp</title>
        <meta name="description" content="WeatherApp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          WeatherApp
        </h1>

        <div>
          <Banner />
        </div>
        <div>
          <Info />
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
