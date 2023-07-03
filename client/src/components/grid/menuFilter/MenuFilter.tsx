import { FC } from 'react'
import styles from './menuFilter.module.css'
import Filters from './filters/Filters'
import Title from './title/Title'
import Search from './search/Search'
import { getGenres } from '@/services/getGenres'

interface MenuFilterProps {
  path: string
}

const MenuFilter: FC<MenuFilterProps> = async ({ path }) => {
  const initialData = await getGenres(path)
  return (
    <div className={styles.wrapperFilters}>
      <Title {...{ path }} />
      <Filters {...{ path, initialData }} />
      <Search {...{ path }} />
    </div>
  )
}
export default MenuFilter