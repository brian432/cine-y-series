import { FC } from 'react'
import styles from './casTitle.module.css'
interface CastTitleProps {
  castName: string
}
const CastTitle: FC<CastTitleProps> = ({ castName }) => {
  return (
    <h1 className={styles.title}>Películas y series de: {castName.replace(/-/g, " ")}</h1>
  )
}
export default CastTitle