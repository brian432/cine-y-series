import { DataHome } from '@/types/commonTypes'
import { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './slider.module.css'
import useResize from '@/hooks/useResize'

interface SliderProps {
  sliderImages: DataHome[]
  page: number
}
const Slider: FC<SliderProps> = ({ sliderImages, page }) => {
  const { isTablet } = useResize()
  return (
    <>
      {
        sliderImages?.map((img, index) => {
          const urlImg = `${process.env.NEXT_PUBLIC_API_IMAGE_BACKGROUND}/${!isTablet ? img.backdrop_path : img.poster_path || img.poster_path}`
          return <div key={`${img.id}`} className={`${index === page ? styles.slider : styles.hidden}`}>
            <Image
              src={urlImg}
              width={!isTablet ? 900 : 200}
              height={!isTablet ? 506 : 300}
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