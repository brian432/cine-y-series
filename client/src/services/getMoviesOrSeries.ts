import { DataHome } from "@/types/commonTypes"
interface IFetchMoviesOrSeries {
  url: string
  pageParam: number
}

export const getMoviesOrSeries = async ({ url, pageParam }: IFetchMoviesOrSeries) => {
  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`)

    const json = await res.json()
    const hasNextPage = json.page < json.total_pages

    const returnObject = {
      nextPage: hasNextPage ? pageParam + 1 : 0,
      previousPage: pageParam - 1,
      moviesOrSeries: json.results as DataHome[] || json.cast as DataHome[]
    }

    return returnObject

  } catch (err) {
    throw err
  }
}

export const getMoviesOrSeriesDetails = async (path: string, movieID: string) => {
  try {
    const res = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_API_DETAILS}${path === "series" ? "tv" : "movie"}/${movieID}?${process.env.NEXT_PUBLIC_API_KEY}&language=es`),
      fetch(`${process.env.NEXT_PUBLIC_API_DETAILS}${path === "series" ? "tv" : "movie"}/${movieID}/credits?${process.env.NEXT_PUBLIC_API_KEY}&language=es`),
      fetch(`${process.env.NEXT_PUBLIC_API_DETAILS}${path === "series" ? "tv" : "movie"}/${movieID}/similar?${process.env.NEXT_PUBLIC_API_KEY}&language=es&page=1`),
      fetch(`${process.env.NEXT_PUBLIC_API_DETAILS}${path === "series" ? "tv" : "movie"}/${movieID}/videos?${process.env.NEXT_PUBLIC_API_KEY}&language=en&page=1`),
    ])
    const [details, cast, { results: similar }, { results: trailers }] = await Promise.all(res.map(result => result.json()))
    return { details, cast, similar, trailers }
  } catch (err) {
    throw err
  }
}
