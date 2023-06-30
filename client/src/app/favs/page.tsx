'use client'
import { FC, useContext } from 'react'
import styles from './favs.module.css'
import Card from '@/components/grid/sectionCards/card/Card'
import { FavContext } from '@/context/FavsContext'

const Favs: FC = ({ }) => {
  const { favs } = useContext(FavContext)
  return (
    <div className={styles.favs}>
      {
        favs?.map(media => <Card key={media.id} data={media} />)
      }
    </div>
  )
}
export default Favs