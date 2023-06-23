import { useQuery } from '@tanstack/react-query'
import { getGenres } from '@/services/getGenres'
import { IGenre } from '@/types/commonTypes'

interface ReturnUseGenres {
  data: IGenre[]
  isLoading: boolean
}

export const useGenres = (genre: string, initialData: IGenre[]): ReturnUseGenres => {
  const { data, isLoading } = useQuery({
    queryKey: ['generos', genre || 'movies'],
    queryFn: () => getGenres(genre),
    initialData: initialData
  })
  return { data, isLoading }
}