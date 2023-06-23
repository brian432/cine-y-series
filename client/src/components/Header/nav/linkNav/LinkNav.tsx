'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

const LinkNav: FC = () => {
  const pathName = usePathname().substring(1, 7)
  return (
    <Link href={pathName === '' || pathName === 'movies' ? '/series' : '/'} className='link'>
      {pathName === '' || pathName === 'movies' ? 'Series' : 'Movies'}
    </Link>
  )
}
export default LinkNav