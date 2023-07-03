/* eslint-disable @next/next/no-img-element */
'use client'
import { ChangeEvent, FC, FormEvent, useState } from 'react'
import styles from './search.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
interface SearchProps {
  path: string
}
const Search: FC<SearchProps> = ({ path }) => {
  const [search, setSearch] = useState<string>('')
  const router = useRouter()
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push(`/${path}?search=${search.replace(/ /g, "-")}`)
    setSearch("")
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  return (
    <form className={styles.search} onSubmit={handleSearch}>
      <input type='search' placeholder='Search' onChange={handleChange} minLength={3} value={search} />
      <button type='submit'>
        {/*<Image
          src="/search.svg"
          alt="My Image"
          width={30}
          height={30}
        />*/}
        <img src="/search.svg" alt='search image' />
      </button>
    </form>
  )
}
export default Search