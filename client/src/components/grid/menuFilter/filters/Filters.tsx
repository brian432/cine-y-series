'use client'
import { FC, useState } from 'react'
import Select from 'react-select'
import styles from './filters.module.css'
import { useRouter } from 'next/navigation'
import { useGenres } from '@/hooks/useGenres'
import { IGenre, optionsFilter } from '@/types/commonTypes'

interface FiltersProps {
  path: string
  initialData: IGenre[]
}

interface IState {
  value: string
  label: string
}

const Filters: FC<FiltersProps> = ({ path, initialData }) => {
  const [selectedOptionGenre, setSelectedOptionGenre] = useState<IState | null>(null);
  const [selectedOptionFilter, setSelectedOptionFilert] = useState<IState | null>(null)

  const route = path === '' || path === 'movies' ? 'movies' : 'series'
  const router = useRouter()
  const { data } = useGenres(path, initialData)

  const handleSelectGenre = (selectedOptionGenre: IState | null) => {
    setSelectedOptionGenre(selectedOptionGenre);
    router.push(`/${route}/genre/${selectedOptionGenre?.value}`)
  };

  const handleSelectFilter = (select: IState | null) => {
    setSelectedOptionFilert(select)
    router.push(`/${route}/filter/${select?.value}`)
  }

  const optionsGenre: any = data?.map(({ id, name }) => ({ value: `${id}`, label: name })) || []

  return (
    <div className={styles.menuFilter}>
      <div className={styles.wrapperSelect}>
        <h3>Filtros</h3>
        <Select
          options={optionsFilter}
          value={selectedOptionFilter}
          onChange={handleSelectFilter}
          instanceId='ssssw'
          isSearchable={false}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: '#FC341B',
              primary: '#FC341B',
              primary50: '#191919'
            },

          })}
        />
      </div>
      <div className={styles.wrapperSelect}>
        <h3>Generos</h3>
        <Select
          options={optionsGenre}
          value={selectedOptionGenre}
          onChange={handleSelectGenre}
          instanceId='dsadas'
          isSearchable={false}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: '#FC341B',
              primary: '#FC341B',
              primary50: '#191919'
            },
          })}
        />
      </div>
    </div>

  )
}
export default Filters