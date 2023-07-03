import { ILogin, IRegisterPost } from "@/types/userTypes"
import { setCookie } from "cookies-next"


export const postLogin = async (data: ILogin): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}login`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(data)
    })
    const json = await res.json()
    if (json.status_code === 200 || json.status_code === 401) {
      setCookie('token', json.data.token) //LocalStorage y sessionStorage no funcionan en el servidor, 
      return json //al enviar las cookies en los headers hay un problema de diferentes dominios al publicar el frontend y el backend en diferentes urls. Por ende esta es la solucion que encontre.
    }
    throw new Error('Error interno del servidor')
  } catch (err) {
    throw new Error('Error al conectarse al servidor') // la request devuelve los datos e un error
  }
}

export const postUser = async (data: IRegisterPost): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}register`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    const json = await res.json()
    if (json.status_code === 201 || json.status_code === 400) return json
    throw new Error('Error interno del servidor')
  } catch (err) {
    throw new Error('Error al conectarse al servidor') // la request devuelve los datos e un error
  }
}