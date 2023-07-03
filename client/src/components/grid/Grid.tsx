import { FC } from 'react'
import { getMoviesOrSeries } from '@/services/getMoviesOrSeries'
import SectionCards from './sectionCards/SectionCards'
import MenuFilter from './menuFilter/MenuFilter'
import { buildUrl } from '@/utils/buildUrl'
import CastTitle from './castTitle/CastTitle'
import NotResults from '../notResults/NotResults'
import { getFavs } from '@/services/favsFetch'

interface GridProps {
  path: string
  search?: string
  castId?: string
  genreId?: string
  filterString?: string
  castName?: string
}
const Grid: FC<GridProps> = async ({ path, castId = '', genreId = '', filterString = '', search = '', castName = '' }) => {
  const url = buildUrl({ path, castId, genreId, pageParam: 1, filterString, search })
  const initialData = await getMoviesOrSeries(url)
  return (
    <>
      {
        initialData?.moviesOrSeries?.length === 0
          ? <NotResults />
          :
          <SectionCards props={{ initialData, path, castId, genreId, filterString, search }}>
            {
              path === 'cast'
                ? <CastTitle {...{ castName }} />
                : <MenuFilter {...{ path }} />
            }
          </SectionCards >
      }
    </>
  )
}
export default Grid