import { FetchNextPageOptions, InfiniteQueryObserverResult } from "@tanstack/react-query"
//Types componentes

export interface SectionCardsProps {
  props: {
    path: string
    castId: string
    genreId: string
    initialData: {
      nextPage: number
      previousPage: number
      moviesOrSeries: DataHome[]
    }
    filterString: string
    search: string
  },
  children: React.ReactNode
}

//lista de peliculas y series
export interface DataHome {
  backdrop_path: string;
  first_air_date?: Date;
  genre_ids: number[];
  id: number;
  name?: string;
  origin_country?: string[];
  original_language: string;
  original_name?: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  adult?: boolean;
  original_title?: string;
  release_date?: Date;
  title?: string;
  video?: boolean;
}

//Lista de generos

export interface IGenre {
  id: number
  name: string
}


//Lista de filtros

export enum FilterOptions {
  Populares = 'popularity.desc',
  Estrenos = 'primary_release_date.desc',
  MasAntiguas = 'primary_release_date.asc',
  Taquillera = 'revenue.desc',
  Top = 'vote_average.desc',
  MasVotadas = 'vote_count.desc',
  MenosVotadas = 'vote_count.asc',
  PeorValoradas = 'vote_average.asc'
}

export const optionsFilter = [
  { value: FilterOptions.Populares, label: 'Populares' },
  { value: FilterOptions.Estrenos, label: 'Estrenos' },
  { value: FilterOptions.Taquillera, label: 'Taquilleras' },
  { value: FilterOptions.Top, label: 'Mejor valoradas' },
  { value: FilterOptions.MasVotadas, label: 'Más votadas' },
  { value: FilterOptions.MasAntiguas, label: 'Más antiguas' },
  { value: FilterOptions.MenosVotadas, label: 'Menos votadas' },
  { value: FilterOptions.PeorValoradas, label: 'Peor valoradas' }
];


//types hooksReactQuery

export interface ReturnUseMoviesOrSeries {
  mapData: { data: DataHome[], DataLength: number }
  isFetchingNextPage: boolean
  hasNextPage?: boolean
  fetchNextPage: (options?: FetchNextPageOptions | undefined) => Promise<InfiniteQueryObserverResult<{
    nextPage: number;
    previousPage: number;
    moviesOrSeries: DataHome[];
  }, unknown>>
}


//login types

export interface IUser {
  username: string
  password: string
}

