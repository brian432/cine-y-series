import { useMutation, type UseMutateFunction } from '@tanstack/react-query'
import { IRegisterPost, ResponseDataRegister } from '@/types/userTypes'
import { postUser } from '../services/authPost'
import { swalAlert, swalSuccess } from '../utils/swal'
import { useRouter } from 'next/navigation'

interface ReturnUseCreateUser {
  mutate: UseMutateFunction<ResponseDataRegister, unknown, IRegisterPost, unknown>
}

export const useCreateUser = (): ReturnUseCreateUser => {
  const router = useRouter()

  const { mutate } = useMutation({
    mutationFn: postUser,
    onSuccess: (data: ResponseDataRegister) => {
      if (data?.status_code === 201) swalSuccess('Usuario creado correctamente', router)
      if (data?.status_code === 400) swalAlert('El nombre de usuario ya existe')
    },
    onError: (error) => {
      if (error instanceof Error) {
        swalAlert(error.message)
      }
    }
  })
  return { mutate }
}
