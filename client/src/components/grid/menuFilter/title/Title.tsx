'use client'
import { optionsFilter } from '@/types/commonTypes'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import styles from './title.module.css'

interface TitleProps {
  path: string
}
const Title: FC<TitleProps> = ({ path }) => {
  const title = path === 'movies'
    ? 'Películas'
    : 'Series'

  const pathFilter = usePathname().substring(15)

  const titleFilter = optionsFilter.filter(option =>
    option.value === pathFilter
      ? option.label
      : null
  )

  return (
    <h1
      className={styles.title}
    >
      {titleFilter.length > 0
        ? `${title}: ${titleFilter[0].label}`
        : `Todas las ${title}`}
    </h1>
  )
}
export default Title