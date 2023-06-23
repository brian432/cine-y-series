import { FC } from 'react'
import Link from 'next/link'
import styles from './nav.module.css'
import LinkNav from './linkNav/LinkNav'

const Nav: FC = () => {
  return (
    <nav className={styles.nav}>
      <Link href={'/'} className='link'>Home</Link>
      <LinkNav />
      <Link href='/login' className='btn'>Iniciar sesión</Link>
    </nav >
  )
}
export default Nav