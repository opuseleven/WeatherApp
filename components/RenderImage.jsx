import { useState, useEffect } from 'react';
import { getWeatherImage } from '../services';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

function RenderImage({ image, alt }) {

  return (
    <div className={styles.imagecontainer}>
      {
        image && (
          <Image src={image} alt={alt} width={50} height={50} />
        )
      }
    </div>
  );
}
export { RenderImage };
