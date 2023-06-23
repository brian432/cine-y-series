import { getMoviesOrSeriesDetails } from '@/services/getMoviesOrSeries'
import { Details } from '@/types/detailsTypes'
import { FC } from 'react'
import SectionDetails from './sectionDetails/SectionDetails'

interface DetailsProps {
  path: string
  mediaId: string
}

{/* @ts-expect-error Async Server Component */ }
const Details: FC<DetailsProps> = async ({ path, mediaId }) => {
  const initialData: Details = await getMoviesOrSeriesDetails(path, mediaId)
  return (
    <SectionDetails props={{ path, mediaId, initialData }} />
  )
}
export default Details