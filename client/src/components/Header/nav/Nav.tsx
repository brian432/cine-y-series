'use client'
import { FC, useContext } from 'react'
import Link from 'next/link'
import styles from './nav.module.css'
import LinkNav from './linkNav/LinkNav'
import { Context } from '@/context/LoggedState'

const Nav: FC = () => {
  const { state: { isLogged }, handleLogout } = useContext(Context)

  return (
    <nav className={styles.nav}>
      <Link href='/' className='link'>Home</Link>
      <LinkNav />
      {
        isLogged
          ? <>
            <Link href='/favs' className='link'>Favs</Link>
            <Link href='/' className='btn' onClick={handleLogout}>Cerrar sesión</Link>
          </>
          : <>
            <Link href='/login' className='btn'>Iniciar sesión</Link>
          </>
      }
    </nav >
  )
}
export default Nav