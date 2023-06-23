import { FC } from 'react'
interface NotResultsProps { }
const NotResults: FC<NotResultsProps> = ({ }) => {
  return (
    <h1 className='notFound'>
      No se encontraron resultados
    </h1>
  )
}
export default NotResults