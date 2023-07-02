'use client'
import { DataHome } from '@/types/commonTypes'
import { FC, useState } from 'react'
import styles from './previewCard.module.css'
import SliderButtons from './sliderButtons/SliderButtons'
import Slider from './slider/Slider'
import LinkDetails from './linkDetails/LinkDetails'

interface PreviewCardProps {
  mapData: DataHome[]
}

const PreviewCard: FC<PreviewCardProps> = ({ mapData }) => {
  const [page, setPage] = useState<number>(0)
  const sliderImages: DataHome[] = mapData.slice(0, 5)

  return (
    <section className={styles.sectionPreview}>
      <Slider {...{ sliderImages, page }} />
      <h1 className={styles.title}>{sliderImages[page]?.title || sliderImages[page]?.name}</h1>
      <LinkDetails {...{ sliderImages, page }} />
      <SliderButtons {...{ setPage, sliderImages, page }} />
    </section >
  )
}
export default PreviewCard