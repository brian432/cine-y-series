import { Similar } from '@/types/detailsTypes'
import { FC } from 'react'
import Image from 'next/image'
import styles from './similar.module.css'
import "swiper/css/bundle"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import Link from 'next/link'
import Favs from '@/components/favs/Favs'

interface SimilarProps {
  similar: Similar[]
  isTablet: boolean
}
const Similar: FC<SimilarProps> = ({ similar, isTablet }) => {
  return (
    <section className={styles.similarWrapper}>
      <h2>Similares</h2>
      <Swiper
        slidesPerView={isTablet ? 3 : 4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={styles.mySwipper}
      >
        {
          similar?.map(movie =>
            <SwiperSlide className={styles.carouselDiv} key={movie.id}>
              <Link href={`${movie.title ? '/movies' : '/series'}/details/${movie.id}`}>
                <Favs />
                <Image
                  src={movie.poster_path ? `${process.env.API_IMAGE}/${movie.poster_path}` : '/noImg.webp'}
                  alt='image'
                  width={250}
                  height={375}
                />
              </Link>
            </SwiperSlide>
          )
        }
      </Swiper>
    </section >
  )
}
export default Similar