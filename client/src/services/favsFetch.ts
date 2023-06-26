import { DataHome } from "@/types/commonTypes";
interface IPostFav {
  data: DataHome
  path?: string
}

export const postFavs = async ({ data, path = '' }: IPostFav): Promise<any> => {
  try {
    const res = await fetch('http://localhost:3001/favs', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        "Authorization": "Bearer " + sessionStorage.getItem("token")
      },
      body: JSON.stringify({
        data,
        path: path === '' ? 'movies' : 'series'
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
  try {
    const res = await fetch('http://localhost:3001/favs', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        "Authorization": "Bearer " + sessionStorage.getItem("token")
      }
    })
    const json = await res.json()
    if (json.status_code === 200 || json.status_code === 400) return json
    throw new Error('Error interno del servidor')
  } catch (err: unknown) {
    throw new Error('Error al conectarse al servidor')
  }
}