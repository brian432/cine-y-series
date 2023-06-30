import { FC, useContext } from 'react'
import Image from 'next/image'
import { DataHome } from '@/types/commonTypes'
import styles from './card.module.css'
import Link from 'next/link'
import { Context } from '@/context/LoggedState'
import { FavContext } from '@/context/FavsContext'

interface CardProps {
  data: DataHome
}

const Card: FC<CardProps> = ({ data }) => {
  const pathName = data?.title ? 'movies' : 'series'
  const { state: { isLogged } } = useContext(Context)
  const { addOrRemoveFavs, favs, isLoadingDel, isLoadingPost } = useContext(FavContext)
  const favsActive = favs.find(media => { return media.id == data.id })

  const handleFav = () => {
    if (isLoadingDel || isLoadingPost) return //si el fetching de agregar o eliminar los favoritos esta cargando, bloqueamos el boton de favoritos
    addOrRemoveFavs(data, pathName)
  }

  return (
    <div className={styles.wrapperCard}>
      {
        isLogged
          ? <button className={favsActive ? `${styles.favActive} ${styles.favouriteBtn}` : styles.favouriteBtn} onClick={handleFav}>
            <Image
              src='/favorite.svg'
              alt='favorite'
              width={25}
              height={25}
            />
          </button >
          : null
      }
      <Link
        href={`/${pathName}/details/${data?.id}`}
      >
        <Image
          src={data?.poster_path ? `${process.env.NEXT_PUBLIC_API_IMAGE}${data?.poster_path}` : '/noImg.webp'}
          alt="My Image"
          width={150}
          height={225}
          className={styles.image}
        />
        <h4>{data?.title || data?.name} | <span>{data?.vote_average?.toFixed(1)}</span></h4>
      </Link>
    </div>
  )
}
export default Card