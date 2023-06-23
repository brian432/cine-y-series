import Link from 'next/link'
import { FC } from 'react'

interface LinkSliderProps {
  id: number
  path?: string
}
const LinkSlider: FC<LinkSliderProps> = ({ id, path }) => {
  return (
    <Link
      href={`${path ? '/movies' : '/series'}/details/${id}`}
      className={`btn`}
    >
      Ver detalles
    </Link>
  )
}
export default LinkSlider