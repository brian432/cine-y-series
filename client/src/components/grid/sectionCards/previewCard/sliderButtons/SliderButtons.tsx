import { Dispatch, FC, SetStateAction } from 'react'
import Image from 'next/image'
import styles from './sliderButtons.module.css'
import { DataHome } from '@/types/commonTypes'
import LinkSlider from '../Shared/linkSlider/LinkSlider'

interface SliderButtonsProps {
  sliderImages: DataHome[]
  setPage: Dispatch<SetStateAction<number>>
  page: number
}

const SliderButtons: FC<SliderButtonsProps> = ({ sliderImages, setPage, page }) => {
  const handlePage = (nextOrBack: string): void => {
    nextOrBack === '+'
      ? setPage((prevIndex) => (prevIndex + 1) % sliderImages.length)
      : setPage((prevIndex) => (prevIndex - 1 + sliderImages.length) % sliderImages.length)
  }
  return (
    <div className={styles.buttons}>
      <Image
        src='/anterior.svg'
        alt='anterior'
        width={50}
        height={50}
        className={styles.button}
        onClick={() => handlePage('-')}
      />
      <LinkSlider id={sliderImages[page].id} path={sliderImages[page]?.title} />
      {
        sliderImages.map((media, index) =>
          <span
            key={media.id}
            className={index === page ? `${styles.selected} ${styles.page}` : `${styles.normal} ${styles.page}`}
          >
            0{index + 1}
          </span>
        )
      }
      <Image
        src='/siguiente.svg'
        alt='siguiente'
        width={50}
        height={50}
        className={styles.button}
        onClick={() => handlePage('+')}
      />
    </div>
  )
}
export default SliderButtons