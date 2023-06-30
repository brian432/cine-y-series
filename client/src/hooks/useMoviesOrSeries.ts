import { useInfiniteQuery } from '@tanstack/react-query'
import { getMoviesOrSeries } from '@/services/getMoviesOrSeries'
import { ReturnUseMoviesOrSeries } from '@/types/commonTypes'
import { SectionCardsProps } from '@/types/commonTypes'
import { buildUrl } from '@/utils/buildUrl'


export const useMoviesOrSeries = (
  props: SectionCardsProps["props"],
  pagination: number
): ReturnUseMoviesOrSeries => {
  const { path, castId, genreId, initialData, filterString, search } = props
  const ObjectInitialData = {
    pages: [initialData],
    pageParams: [1]
  }

  const {
    data,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage
  } = useInfiniteQuery({
    queryKey: [path || 'movies', genreId, filterString, search, castId],
    queryFn: ({ pageParam = 1 }) => getMoviesOrSeries(buildUrl({ path, castId, genreId, pageParam, filterString, search })),
    getNextPageParam: (lastPage, allPages) => lastPage.nextPage,
    initialData: ObjectInitialData,
  })
  if (data !== undefined) {
    const mapData = {
      data: data.pages.slice(0, pagination).flatMap(data => data.moviesOrSeries),
      DataLength: data.pages.length
    } //(1)

    return { mapData, isFetchingNextPage, hasNextPage, fetchNextPage }
  }
  return {
    mapData: { data: [], DataLength: 0 }, isFetchingNextPage, hasNextPage, fetchNextPage
  }
}

/*1) Utilizamos slice y un estado local por el siguiente motivo: Estamos en el home, La api devuelve 20 peliculas, si clickeamos en "mostrar mas"
    mostrara 40 peliculas en total y asi sucesivamente; si nos vamos a otra pagina y luego volvemos al home, este volvera a mostrar la 40 peliculas
    en vez de 20, esto puede generar una mala experiencia de usuario. Pagination almacenara la cantidad de pagina obtenidas, pero si cambiamos de pagina
    volvera a 1. De esta forma siempre que entremos a una pagina nueva mostrara la primera pagina obtenida 

    Tambien agregamos un condicional en el boton de mostrar mas para que si pagination esta por debajo de la cantidad de paginas en cache, al hacer 
    click en mostrar mas, solo se actualizara el estado y no se hara uso de la funcion fetchNextPage, una vez igualados la cantidad de paginas con el estado
    local pagination, se volvera a hacer uso de fetchNextPage.
*/