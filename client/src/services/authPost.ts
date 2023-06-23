export const postLogin = async (data: any): Promise<any> => {
  try {
    const res = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        username: "User1",
        password: "123456"
      })
    })

    const json = await res.json()
    if (json.status_code === 201 || json.status_code === 400) return json
    throw new Error('Error interno del servidor')
  } catch (err) {
    throw new Error('Error al conectarse al servidor') // la request devuelve los datos e un error
  }
}