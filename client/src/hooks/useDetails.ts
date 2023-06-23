import { useQuery } from '@tanstack/react-query'
import { SectionDetailsProps } from '@/components/details/sectionDetails/SectionDetails'
import { getMoviesOrSeriesDetails } from '@/services/getMoviesOrSeries'
import { Details } from '@/types/detailsTypes'

interface ReturnUseGenres {
  data: Details
  isLoading: boolean
}

export const useDetails = (props: SectionDetailsProps["props"]): ReturnUseGenres => {
  const { path, mediaId, initialData } = props
  const { data, isLoading } = useQuery({
    queryKey: [path, mediaId],
    queryFn: () => getMoviesOrSeriesDetails(path, mediaId),
    initialData: initialData
  })
  return { data, isLoading }
}