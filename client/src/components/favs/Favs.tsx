'use client'
import { FC, MouseEventHandler, useContext } from 'react'
import Image from 'next/image'
import styles from './favs.module.css'
import { Context } from '@/context/LoggedState'
interface FavsProps {
  addOrRemoveFavs: MouseEventHandler<HTMLButtonElement>
  favsActive: boolean
}
const Favs: FC<FavsProps> = ({ addOrRemoveFavs, favsActive }) => {
  return (
    <button className={favsActive ? `favActive ${styles.favouriteBtn}` : styles.favouriteBtn} onClick={addOrRemoveFavs}>
      <Image
        src='/favorite.svg'
        alt='favorite'
        width={25}
        height={25}
      />
    </button >
  )
}
export default Favs