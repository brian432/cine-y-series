import { FC } from 'react'
import Image from 'next/image'
import { DataHome } from '@/types/commonTypes'
import styles from './card.module.css'
import Link from 'next/link'
import Favs from '@/components/favs/Favs'

interface CardProps {
  data: DataHome
  path?: string
}
const Card: FC<CardProps> = ({ data, path }) => {
  return (
    <Link
      className={styles.wrapperCard}
      href={`${path ? '/movies' : '/series'}/details/${data.id}`}
    >
      <Favs />
      <Image
        src={data.poster_path ? `${process.env.API_IMAGE}${data.poster_path}` : '/noImg.webp'}
        alt="My Image"
        width={150}
        height={225}
        className={styles.image}
      />
      <h4>{data.title || data.name} | <span>{data?.vote_average?.toFixed(1)}</span></h4>
    </Link>
  )
}
export default Card