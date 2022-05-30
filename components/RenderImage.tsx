import Image from 'next/image';
import styles from '../styles/Home.module.css';

interface RenderImageProps {
  image: string,
  alt: string
}

const RenderImage: React.FC<RenderImageProps> = ({ image, alt }) => {

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
