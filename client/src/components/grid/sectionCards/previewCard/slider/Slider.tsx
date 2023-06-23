import { DataHome } from '@/types/commonTypes'
import { FC } from 'react'
import Image from 'next/image'
import styles from './slider.module.css'

interface SliderProps {
  sliderImages: DataHome[]
  page: number
  isTablet: boolean
}
const Slider: FC<SliderProps> = ({ sliderImages, page, isTablet }) => {
  return (
    <>
      {
        sliderImages?.map((img, index) => {
          const urlImg = `${process.env.API_IMAGE_BACKGROUND}/${isTablet ? img.poster_path : img.backdrop_path || img.poster_path}`
          return <div key={`${img.id}`} className={`${index === page ? styles.slider : styles.hidden}`}>
            <Image
              src={urlImg}
              width={isTablet ? 200 : 900}
              height={isTablet ? 300 : 506}
              alt='imagen card'
              priority={true} //Esta propiedad es necesaria para que las imagenes del slider no esperen a descargarse, de lo contrario tardara en cargarse y volvera a descargarse la imagen cada vez que cambiemos de imagen en el slider
            />
          </div>
        })
      }
    </>
  )
}
export default Slider