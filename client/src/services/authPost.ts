import { ILogin, IRegisterPost } from "@/types/userTypes"

export const postLogin = async (data: ILogin): Promise<any> => {
  try {
    const res = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(data)
    })
    const json = await res.json()
    if (json.status_code === 200 || json.status_code === 401) return json
    throw new Error('Error interno del servidor')
  } catch (err) {
    throw new Error('Error al conectarse al servidor') // la request devuelve los datos e un error
  }
}

export const postUser = async (data: IRegisterPost): Promise<any> => {
  try {
    const res = await fetch('http://localhost:3001/register', {
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