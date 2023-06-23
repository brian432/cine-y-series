/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_KEY:'api_key=04c35731a5ee918f014970082a0088b1',
    API_TMDB:'https://api.themoviedb.org/3/discover/',
    API_DETAILS:'https://api.themoviedb.org/3/',
    GENRE_API:'https://api.themoviedb.org/3/genre/',
    API_IMAGE: 'https://image.tmdb.org/t/p/w500',
    API_IMAGE_BACKGROUND: 'https://image.tmdb.org/t/p/original'
  },
  images: {
    domains: ['image.tmdb.org'],
  }
}

module.exports = nextConfig
