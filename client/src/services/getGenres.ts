export const getGenres = async (genero: string) => {
  const genre = genero === '' || genero === 'movies' ? 'movie' : 'tv'

  try {
    const res = await fetch(`${process.env.GENRE_API}${genre}/list?${process.env.API_KEY}&language=es`)
    if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`)

    const json = await res.json()
    return json.genres
  } catch (err) {
    throw err
  }
}
