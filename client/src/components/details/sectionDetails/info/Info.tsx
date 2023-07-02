import { FC, useState } from 'react'
import Image from 'next/image'
import styles from './info.module.css'
import { ICast, DetailsID } from '@/types/detailsTypes'
import Cast from '../cast/Cast'
import Link from 'next/link'
import { limitString } from '@/utils/limitString'

interface InfoProps {
  details: DetailsID
  cast: ICast[]
}
const Info: FC<InfoProps> = ({ details, cast }) => {
  const [more, setMore] = useState<boolean>(false)
  const desc = limitString(details?.overview)
  return (
    <section className={styles.details}>
      <div className={styles.divImg}>
        <Image
          src={details?.poster_path ? `${process.env.NEXT_PUBLIC_API_IMAGE}${details.poster_path}` : '/noImg.webp'}
          alt="My Image"
          width={150}
          height={225}
          className={styles.image}
        />
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>{details.name || details.title}<span className={styles.vote}>{details.vote_average?.toFixed(1) || 0}</span></h1>
        <p>Fecha de estreno: {details.first_air_date || details.release_date}</p>
        <div>
          <p className={styles.desc}>{more ? details?.overview : desc}</p>
          {
            details?.overview?.length > 250
              ? <span className={styles.more} onClick={() => setMore(!more)}>
                {more ? ' menos...' : ' ...más'}
              </span>
              : null
          }
        </div>
        {cast ? <Cast {...{ cast }} /> : null}
        <div className={styles.genresWrapper}>
          <h2> Generos:</h2>
          <div>
            {
              details?.genres?.map(genre =>
                <Link className='link' href={`${details.title ? 'movies' : 'series'}/genre/${genre.id}`} key={genre.id}>{genre.name}</Link>
              )
            }
          </div>
        </div>
      </div>

    </section >
  )
}
export default Info