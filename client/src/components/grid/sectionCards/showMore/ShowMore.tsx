'use Client'
import { Dispatch, FC, SetStateAction } from 'react'
import styles from './showMore.module.css'

interface ShowMoreProps {
  fetchNextPage: () => void
  isFetchingNextPage: boolean
  setPagination: Dispatch<SetStateAction<number>>
  pagination: number
  hasNextPage?: boolean
  DataLength: number
}
const ShowMore: FC<ShowMoreProps> = ({
  fetchNextPage,
  isFetchingNextPage,
  setPagination,
  pagination,
  hasNextPage,
  DataLength

}) => {
  const handlePagination = (nextOrBack: string) => {
    if (nextOrBack === '+') {
      if (pagination < DataLength) {
        setPagination(prev => prev + 1)
      } else {
        fetchNextPage()
        setPagination(prev => prev + 1)
      }
    } else {
      setPagination(prev => prev - 1)
    }
  }
  return (
    <div className={styles.wrapperButtons}>
      {pagination > 1
        ? <button
          className={styles.showLess}
          onClick={() => handlePagination('-')}
        >
          {isFetchingNextPage ? 'cargando..' : 'Menos...'}
        </button>
        : null
      }
      {
        hasNextPage
          ? <button
            className={styles.showMore}
            onClick={() => handlePagination('+')}
          >
            {isFetchingNextPage ? 'cargando..' : 'Más...'}
          </button>
          : null
      }
    </div>

  )
}
export default ShowMore