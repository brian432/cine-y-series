import { Videos } from '@/types/detailsTypes'
import { FC } from 'react'
import styles from './trailers.module.css'
interface trailersProps {
  trailers: Videos[]
}
const Trailers: FC<trailersProps> = ({ trailers }) => {
  return (
    <section className={styles.trailers}>
      {
        trailers.slice(0, 4).map(trailer =>
          <div key={trailer.id} className={styles.video}>
            <h2>{trailer.type}</h2>
            <div className={styles.videoResponsive}>
              <iframe
                className={styles.iframe}
                src={`https://www.youtube.com/embed/${trailer?.key}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )
      }
    </section>
  )
}
export default Trailers