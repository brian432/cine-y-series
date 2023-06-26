'use client'
import { useGetFavs } from '@/hooks/useFavs'
import { FC } from 'react'
interface FavsProps { }

const Favs: FC<FavsProps> = ({ }) => {
  const { data } = useGetFavs()

  return (
    <div>
    </div>
  )
}
export default Favs