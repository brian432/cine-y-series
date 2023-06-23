'use client'
import { FC, useState } from 'react'
import styles from './burguer.module.css'

interface IBurguer {
  children: React.ReactNode
}

const Burguer: FC<IBurguer> = ({ children }) => {
  const [menu, setMenu] = useState<boolean>(false);
  const handleMenu = () => {
    setMenu(!menu)
  }

  return (
    <div className={styles.wrapperBurguer}>
      <div className={styles.burguer} onClick={handleMenu}>
        <div className={menu ? styles.linea1 : ''}></div>
        <div className={menu ? styles.linea2 : ''}></div>
        <div className={menu ? styles.linea3 : ''}></div>
      </div >
      <div
        className={
          menu
            ? `${styles.menuActive} ${styles.navWrapper}`
            : styles.navWrapper
        }
        onClick={handleMenu}
      >
        {children}
      </div>
    </div >
  )
}
export default Burguer