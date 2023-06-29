import styles from '../styles/Components.module.css';
import { FC } from 'react';

const Banner: FC = () => {

  return (
    <div>
      <header>
        <h1 className={styles.titleheading}>
          <span>Weather</span><span>App</span>
        </h1>
      </header>
    </div>
  )
}
export { Banner };
