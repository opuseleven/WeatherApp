import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Banner, Info, Footer, SearchBar } from '../components'

const Home: NextPage = () => {



  return (
    <div className={styles.container}>
      <Head>
        <title>WeatherApp</title>
        <meta name="description" content="WeatherApp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        </h1>
        <div>
          <Banner />
        </div>

        <Info />

        <p className={styles.description}>

        </p>

      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  )
}

export default Home
