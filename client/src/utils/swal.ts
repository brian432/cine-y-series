// import { type NavigateFunction } from 'react-router-dom'
import Swal, { type SweetAlertResult } from 'sweetalert2'

export const swalAlert = async (title: string, text: string = 'Intentelo nuevamente'): Promise<SweetAlertResult> => {
  return await Swal.fire({
    title,
    text,
    width: '400px',
    timer: 5000,
    timerProgressBar: true,
    confirmButtonText: 'Aceptar',
    confirmButtonColor: '#FC341B'
  })
}

export const swalSuccess = async (title: string, router: any): Promise<SweetAlertResult> => {
  return await Swal.fire({
    title,
    width: '400px',
    timer: 5000,
    timerProgressBar: true,
    confirmButtonText: 'Aceptar',
    confirmButtonColor: '#FC341B'
  }).then(result => {
    if (result.isConfirmed) {
      if (title === 'Producto agregado correctamente') return result
    }
    router.push('/login')
    return result
  })
}
