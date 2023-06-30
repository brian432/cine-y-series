import { FC } from 'react'
import styles from './similar.module.css'
import "swiper/css/bundle"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import Card from '@/components/grid/sectionCards/card/Card'
import { DataHome } from '@/types/commonTypes'

interface SimilarProps {
  similar: DataHome[]
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
              <Card data={movie} />
            </SwiperSlide>
          )
        }
      </Swiper>
    </section >
  )
}
export default Similar