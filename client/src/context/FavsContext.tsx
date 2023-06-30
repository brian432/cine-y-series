'use client'
import { useDelFavs, useGetFavs, usePostFavs } from '@/hooks/useFavs'
import { DataHome } from '@/types/commonTypes'
import React, { createContext, ReactNode, FC, useEffect, useState } from 'react'

interface AppContext {
  favs: DataHome[]
  addOrRemoveFavs: (mediaData: DataHome, pathName: string) => void
  isLoadingPost: boolean
  isLoadingDel: boolean
}

interface Props {
  children: ReactNode
}

export const FavContext = createContext<AppContext>({
  favs: [],
  addOrRemoveFavs() { },
  isLoadingPost: false,
  isLoadingDel: false
})

export const FavProvider: FC<Props> = ({ children }: Props) => {
  const [favs, setFavs] = useState<DataHome[]>([])
  const { data } = useGetFavs()
  const { mutate: add, isLoading: isLoadingPost } = usePostFavs()
  const { mutate: remove, isLoading: isLoadingDel } = useDelFavs()

  useEffect(() => {
    data?.length > 0 && setFavs(data.map(media => media.data))
  }, [data])

  const addOrRemoveFavs = (mediaData: DataHome, pathName: string) => {
    let favActive = favs.find(media => { return media.id == mediaData.id })
    let removeFavsDB = data.find(media => { return media.data.id == mediaData.id })

    if (!favActive) {
      add({ data: mediaData, pathName })
      setFavs(prevFavs => [...prevFavs, mediaData])
    } else {
      let mediaLeft = favs.filter(media => { return media.id != mediaData.id })

      remove(`${removeFavsDB?.id}`) //agregar el id del favorito
      setFavs(mediaLeft)
    }
  }


  const removeAllFavs = (id: string) => {
    setFavs([])
    remove(id)
  }

  return (
    <FavContext.Provider value={{
      favs,
      addOrRemoveFavs,
      isLoadingPost,
      isLoadingDel
    }}>
      {children}
    </FavContext.Provider>
  )
}