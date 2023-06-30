import { DataHome } from "@/types/commonTypes";
import { getCookie } from "cookies-next";
interface IPostFav {
  data: DataHome
  pathName: string
}

export const postFavs = async ({ data, pathName }: IPostFav): Promise<any> => {
  const token = getCookie('token')
  try {
    const res = await fetch('http://localhost:3001/favs', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify({
        data,
        path: pathName
      })
    })
    if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`)
    const json = await res.json()

    if (json.status_code === 200 || json.status_code === 400) return json

    throw new Error('Error interno del servidor')
  } catch (err) {
    throw new Error('Error al conectarse al servidor')
  }
}


export const getFavs = async (): Promise<any> => {
  const token = getCookie('token')
  try {
    const res = await fetch('http://localhost:3001/favs', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        "Authorization": "Bearer " + token
      }
    })
    const json = await res.json()

    if (json.status_code === 200 || json.status_code === 400) return json
    throw new Error('Error interno del servidor')
  } catch (err: unknown) {
    throw new Error('Error al conectarse al servidor')
  }
}

export const delFavs = async (id: string): Promise<any> => {
  const token = getCookie('token')
  try {
    const res = await fetch(`http://localhost:3001/favs/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        "Authorization": "Bearer " + token
      }
    })
    if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`)
    const json = await res.json()

    if (json.status_code === 200 || json.status_code === 400) return json

    throw new Error('Error interno del servidor')
  } catch (err) {
    throw new Error('Error al conectarse al servidor')
  }
}