/* eslint-disable @next/next/no-img-element */
'use client'
import { useDetails } from '@/hooks/useDetails'
import { Details } from '@/types/detailsTypes'
import { FC } from 'react'
// import Image from 'next/image' requiere pago a partir de la optimizacion de
import useResize from '@/hooks/useResize'
import styles from './sectionDetails.module.css'
import Info from './info/Info'
import Trailers from './trailers/Trailers'
import Similar from './similarMovies/Similar'

export interface SectionDetailsProps {
  props: {
    initialData: Details
    path: string
    mediaId: string
  }
}

const SectionDetails: FC<SectionDetailsProps> = ({ props }) => {
  const { data: { details, cast: { cast }, similar, trailers } } = useDetails(props)
  const { isTablet } = useResize()
  const urlImg = `${process.env.NEXT_PUBLIC_API_IMAGE_BACKGROUND}${!isTablet ? details?.backdrop_path : details?.poster_path}`
  return (
    <main>
      <div className={styles.background}>
        {/*<Image
          src={urlImg}
          width={!isTablet ? 900 : 200}
          height={!isTablet ? 506 : 300}
          alt='imagen card'
        />*/}
        <img src={urlImg} alt='image' />
      </div>
      <Info {...{ details, cast }} />{/*cast y los generos van dentro de info*/}
      {trailers?.length > 0 ? <Trailers {...{ trailers }} /> : null}
      {similar?.length > 0 ? <Similar {...{ similar, isTablet }} /> : null}
    </main>
  )
}
export default SectionDetails