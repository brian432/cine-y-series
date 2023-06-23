'use client'
import { FC, useState } from 'react'
import styles from './sectionCards.module.css'
import Card from './card/Card'
import { useMoviesOrSeries } from '@/hooks/useMoviesOrSeries'
import { SectionCardsProps } from '@/types/commonTypes'
import ShowMore from './showMore/ShowMore'
import PreviewCard from './previewCard/PreviewCard'


const SectionCards: FC<SectionCardsProps> = ({ props, children }) => {
  const [pagination, setPagination] = useState<number>(1)

  const {
    mapData: { data, DataLength },
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useMoviesOrSeries(props, pagination)

  return (
    <section className={styles.sectionCards}>
      <PreviewCard mapData={data} />
      {children}
      <div className={styles.wrapperCards}>
        {
          data?.map(data =>
            <Card key={`${data.id}`} data={data} path={data.title} />
          )
        }
      </div>
      {
        data.length < 20 || props.path === 'cast'
          ? null
          : <ShowMore
            {...{
              fetchNextPage,
              isFetchingNextPage,
              setPagination,
              pagination,
              hasNextPage,
              DataLength
            }}
          />
      }
    </section>
  )
}
export default SectionCards