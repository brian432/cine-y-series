import { Context } from "@/context/LoggedState"
import { delFavs, getFavs, postFavs } from "@/services/favsFetch"
import { IFavs } from "@/types/commonTypes"
import { ResponseDataFavs } from "@/types/userTypes"
import { swalAlert } from "@/utils/swal"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useContext } from "react"

export const usePostFavs = () => {
  const queryClient = useQueryClient()
  const { mutate, isLoading } = useMutation({
    mutationFn: postFavs,
    onSuccess: (data: ResponseDataFavs) => {
      if (data?.status_code === 200) { //Cuando el favorito se agrego correctamente, en vez de invalidar la query y que tanstack vuelva a hacer la peticion a la base de datos, actualizamos la query con el nuevo favorito y evitamos hacer fetchings innecesarios
        const favsData: any = queryClient.getQueryData(['favs']) //accedemos a la query

        const updateFavs = { //Lo que tenemos que actualizar es solo la propiedad 'data' de la query, al no poder acceder directamente a esta propiedad, actualizamos la query entera
          ...favsData, //desplegamos la query y modificamos solo la propiedad data agregando el nuevo elemento a la lista de favoritos
          data: [...favsData?.data, data.data]
        }

        queryClient.setQueryData(['favs'], updateFavs) //con la variable lista, actualizamos la query mediante setQueryData()
      }
      if (data.status_code === 400) swalAlert('No se pudo agregar el favorito, inicie sesión nuevamente')
    },
    onError: (error) => {
      if (error instanceof Error) swalAlert(error.message)
    }
  })
  return { mutate, isLoading }
}

interface ReturnAllFavs {
  data: IFavs[]
  isLoading: boolean
  isError: boolean
}

//Obtener todos los favoritos del usuario
export const useGetFavs = (): ReturnAllFavs => {
  const { state: { isLogged } } = useContext(Context)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['favs'],
    queryFn: getFavs,
    enabled: isLogged
  })
  if (data?.status_code === 200) return { data: data.data, isLoading, isError }
  return { data: [], isLoading, isError }
}

export const useDelFavs = () => {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: delFavs,
    onSuccess: (data: ResponseDataFavs) => {
      if (data?.status_code === 200) {
        const favsData: any = queryClient.getQueryData(['favs'])
        const updateFavs = {
          ...favsData,
          data: favsData?.data?.filter((media: { id: any }) => media.id !== data.data.id)
        }
        queryClient.setQueryData(['favs'], updateFavs)
      }
      if (data.status_code === 400) swalAlert('No se pudo eliminar el favorito, inicie sesión nuevamente')
    },
    onError: (error) => {
      if (error instanceof Error) swalAlert(error.message)
    }
  })
  return { mutate, isLoading }
}