interface IUrl {
  path: string
  castId: string
  genreId: string
  pageParam: number
  filterString: string
  search: string
}

export const buildUrl = ({ path, castId, genreId, pageParam, filterString, search }: IUrl) => {
  if (path === 'cast') {
    const url: string = `${process.env.API_DETAILS}person/${castId}/combined_credits?page=${pageParam}&${process.env.API_KEY}`
    return { url, pageParam }
  }
  const pathName = path === 'movies' || path === undefined ? 'movie' : 'tv'
  if (search !== '') {
    const url: string = `${process.env.API_DETAILS}search/${pathName}?${process.env.API_KEY}&page=${pageParam}&query=${search}`
    return { url, pageParam }
  }
  const dinamicUrl: string = filterString === 'vote_average.desc'
    ? `&sort_by=vote_average.desc&page=${pageParam}&without_genres=99,10755&vote_count.gte=200`
    : `&page=${pageParam}&sort_by=${filterString || 'primary_release_date.desc'}&vote_count.gte=100&with_genres=${genreId}`

  const url: string = `${process.env.API_TMDB}${pathName}?include_adult=false&include_video=false${dinamicUrl}&${process.env.API_KEY}&language=es`

  return { url, pageParam }
}
