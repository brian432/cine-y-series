/* eslint-disable @next/next/no-img-element */
import { FC } from 'react'
import Image from 'next/image'
import styles from './cast.module.css'
import { ICast } from '@/types/detailsTypes'
import Link from 'next/link'
interface CastProps {
  cast: ICast[]
}
const Cast: FC<CastProps> = ({ cast }) => {
  return (
    <>
      <h2>Cast</h2>
      <div className={styles.castWrapper}>
        {
          cast?.slice(0, 5).map(actor =>
            <Link
              key={actor.id}
              href={`/cast/${actor.id}/${actor.name.replace(/ /g, "-")}`}
              className={styles.cast}>
              {/*<Image
                src={actor.profile_path ? `${process.env.NEXT_PUBLIC_API_IMAGE}/${actor.profile_path}` : '/noImg.webp'}
                alt='actor Image'
                width={80}
                height={124}
              />*/}
              <img src={actor.profile_path ? `${process.env.NEXT_PUBLIC_API_IMAGE}/${actor.profile_path}` : '/noImg.webp'} alt='actor image' />
              <p>{actor.name}</p>
            </Link>
          )

        }
      </div>
    </>
  )
}
export default Cast