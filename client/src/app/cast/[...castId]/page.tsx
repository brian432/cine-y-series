import Grid from '@/components/grid/Grid'
import { FC } from 'react'
interface CastIdProps { }
{/* @ts-expect-error Async Server Component */ }
const CastId: FC<CastIdProps> = async ({ params: { castId } }) => {
  return (
    <Grid path='cast' castId={castId[0]} castName={castId[1]} />
  )
}
export default CastId