import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Banner, Info, SearchForm, CityDisplay, WeatherDisplay, Footer } from '../components'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { ApiData, City, ZipData, CityData } from '../types';
import { cityError, errorCity, forecastError } from '../errors';

const Home: NextPage = () => {

  const [citySearch, setCitySearch] = useState<string>("Nashville, TN");
  const [zipSearch, setZipSearch] = useState<boolean>(false);
  const [city, setCity] = useState<City | null>();
  const tempData: ApiData = require('../data/testdata.json');
  const [data, setData] = useState<ApiData>(tempData);
  const apiKey = process.env.API_KEY;
  const testUrl = '/api/testdata' // only used for testing


  function handleCityResults(data: any) {
    let returnCity: City | null;
    if (zipSearch) {
      try {
        const zipData: ZipData = data;
        returnCity = {
          name: zipData.name,
          lat: String(zipData.lat),
          lon: String(zipData.lon)
        }
      } catch {
        returnCity = errorCity();
      }
    } else {
      try {
        const cityData: CityData = data[0];
        returnCity = {
          name: cityData.name,
          lat: String(cityData.lat),
          lon: String(cityData.lon)
        }
      } catch {
        returnCity = errorCity();
      }
    }
    return returnCity;
  }

  async function requestGeolocation(url: string) {
    await axios
      .request({
        url: url,
        method: 'get',
        responseType: 'json',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      })
      .then((res) => {
        const newCity = handleCityResults(res.data);
        if (newCity.name === "Error") {
          setData(cityError());
        } else {
          setCity(newCity);
        }
      })
      .catch((err) => {
        console.log(err);
        const error = cityError();
        setData(error);
      });
  }

  async function requestWeatherData(url: string) {
    await axios
      .request({
        url: url,
        method: 'get',
        responseType: 'json',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      })
      .then((res) => {setData(res.data)})
      .catch((err) => {
        console.log(err);
        const error = forecastError();
        setData(error);
      })
  }

  useEffect(() => {
    const source = axios.CancelToken.source();
    if (citySearch !== '') {
      const searchTerm = citySearch.split(' ').join('_');
      const coordsUrl = 'https://api.openweathermap.org/geo/1.0/'
                        + (zipSearch ? 'zip?zip=' : 'direct?q=') + searchTerm
                        + (zipSearch ? '' : '&limit=3') + '&appid=' + apiKey;
      requestGeolocation(coordsUrl);
    }
    return () => {
      source.cancel();
    }
  }, [citySearch]);

  useEffect(() => {
    const source = axios.CancelToken.source();
    if (city && city.lon.length > 0 && city.lat.length > 0) {
      const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat='
                  + city.lat + '&lon=' + city.lon + '&cnt=3&appid=' + apiKey;
      requestWeatherData(forecastUrl);
    }
    return () => {
      source.cancel();
    }
  }, [city])

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
          <SearchForm setCitySearch={setCitySearch} zip={zipSearch}
            setZip={setZipSearch}
          />
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
