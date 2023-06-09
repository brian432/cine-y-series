import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import express, { type Request, type Response } from 'express'
import User from '../models/User'
import { UserToken } from '../types'
import { validateLogin } from '../middleware/validator'

const {
  SECRET
} = process.env

const loginRouter = express.Router()

loginRouter.post('/', validateLogin, async (req: Request, res: Response): Promise<Response> => {
  const { body: { username, password } } = req
  try {
    const user = await User.findOne({ username })

    const passwordCorrect = user === null
      ? false
      : await bcrypt.compare(password, user.passwordHash)

    if (!((user !== null) && passwordCorrect)) {
      throw new Error('invalid username or password')
    };

    const userForToken: UserToken = {
      id: user._id,
    }
    const token = jwt.sign(userForToken, SECRET as string, { expiresIn: '1d' })
    /*res.cookie('token', token, { //al publicar el frontend y el backend en diferentes dominios, hay un problema de dns diferentes y por eso no me acepta el token en el navegador.
      maxAge: 24 * 60 * 60 * 1000,
      secure: true
    })*/

    return res.status(200)
      .json({
        status_code: 200,
        data: {
          token,
          username: user.username,
          id: user._id,
          favs: user.favs
        }
      })
  } catch (err: any) {
    return res.status(401).send({
      status_code: 401,
      error: err.message
    })
  }
})

export default loginRouter