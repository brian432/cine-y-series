import { useMutation, type UseMutateFunction } from '@tanstack/react-query'
import { ResponseDataLogin, ILogin } from '@/types/userTypes'
import { postLogin } from '../services/authPost'
import { useContext } from 'react'
import { Context } from '../context/LoggedState'
import { useRouter } from 'next/navigation'
import { swalAlert } from '@/utils/swal'

interface ReturnUseLogin {
  mutate: UseMutateFunction<ResponseDataLogin, unknown, ILogin, unknown>
}

export const useLogin = (): ReturnUseLogin => {
  const { dispatch } = useContext(Context)
  const router = useRouter()

  const { mutate } = useMutation({ // envio los datos del logeo y manejo el resultado con las propiedades onSuccess y onError
    mutationFn: postLogin,
    onSuccess: (data: ResponseDataLogin) => {
      if (data?.status_code === 200) {
        console.log(data)
        sessionStorage.setItem('token', data.data?.token)
        dispatch({
          type: 'logged',
          payload: {
            isLogged: true,
            favs: data.data.favs
          }
        })
        router.replace('/')
      }
      if (data.status_code === 401) swalAlert('Usuario y/o contraseña invalida')
    },
    onError: (error) => {
      if (error instanceof Error) swalAlert(error.message)
    }
  })

  return { mutate }
}
