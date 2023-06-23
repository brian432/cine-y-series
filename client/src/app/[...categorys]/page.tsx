import Details from '@/components/details/Details'
import Grid from '@/components/grid/Grid'
import { notFound } from 'next/navigation'
import { FC } from 'react'
interface CategorysProps {
  params: {
    categorys: string[]
  }
  searchParams: {
    search: string
  }
}
{/* @ts-expect-error Async Server Component */ }
const Category: FC<CategorysProps> = async ({ params: { categorys }, searchParams: { search } }) => {

  const [category, filter, id] = categorys
  const isValidCategory = ["movies", "series"].includes(category)
  const isValidFilter = ["genre", "filter", "details"].includes(filter)

  if (!isValidCategory) notFound() //Si el primer elemento no pasa el validador se retorna notfound
  if (search !== undefined) return <Grid path={category} search={search} />
  if (filter === undefined) return <Grid path={category} /> //Si el primer elemento pasa el validador pero el segundo elemento no existe, solo se pasa una prop al componente.
  if (!isValidFilter) notFound() //Si el segundo elemento existe pero no pasa el validador, se retorna notFound
  if (filter === 'genre') return <Grid path={category} genreId={id} /> //Si el segundo elemento pasa el validador, se pasan 2 props al componente dependiendo 
  if (filter === 'filter') return <Grid path={category} filterString={id} />
  if (filter === 'details') return <Details path={category} mediaId={id} />
}
export default Category