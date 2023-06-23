import * as yup from 'yup'
const required = '* Campo requerido'

export const userSchema = yup.object().shape({
  username: yup.string().min(3, 'Ingrese mas de 2 caracteres').required(required),
  password: yup.string().min(3, 'Ingrese mas de 2 caracteres').required(required),
})