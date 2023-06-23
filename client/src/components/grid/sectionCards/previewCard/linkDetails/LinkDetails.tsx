import { DataHome } from '@/types/commonTypes'
import { FC } from 'react'
import styles from './linkDetails.module.css'
import LinkSlider from '../Shared/linkSlider/LinkSlider'

interface LinkDetailsProps {
  sliderImages: DataHome[]
  page: number
}
const LinkDetails: FC<LinkDetailsProps> = ({ sliderImages, page }) => {
  return (
    <div className={styles.link}>
      <LinkSlider id={sliderImages[page]?.id} path={sliderImages[page]?.title} /> {/*La propiedad title no existe en series*/}
      <span>{sliderImages[page]?.vote_average?.toFixed(1)}</span>
    </div>
  )
}
export default LinkDetails