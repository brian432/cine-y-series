import { FC } from 'react'
import Image from 'next/image'
import styles from './favs.module.css'
interface FavsProps { }
const Favs: FC<FavsProps> = ({ }) => {
  return (
    <button className={styles.favouriteBtn}>
      <Image
        src='/favorite.svg'
        alt='favorite'
        width={25}
        height={25}
      />
    </button>
  )
}
export default Favs