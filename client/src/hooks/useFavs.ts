import { getFavs, postFavs } from "@/services/favsFetch"
import { DataHome } from "@/types/commonTypes"
import { ResponseDataFavs } from "@/types/userTypes"
import { swalAlert } from "@/utils/swal"
import { UseMutateFunction, useMutation, useQuery } from "@tanstack/react-query"



export const usePostFavs = () => {
  const { mutate } = useMutation({
    mutationFn: postFavs,
    onSuccess: (data: ResponseDataFavs) => {
      if (data?.status_code === 200) {
        swalAlert('favorito agregado')
      }
      if (data.status_code === 400) swalAlert('No se pudo agregar el favorito, inicie sesión nuevamente')
    },
    onError: (error) => {
      if (error instanceof Error) swalAlert(error.message)
    }
  })
  return { mutate }
}

export const useGetFavs = () => {
  const { data } = useQuery({
    queryKey: ['favs'],
    queryFn: getFavs
  })
  if (data?.status_code === 200) return { data: data.data }
  console.log(data)
  return { data: [] }
}