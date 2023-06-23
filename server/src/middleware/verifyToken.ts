/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import jwt from 'jsonwebtoken'
import { type NextFunction, type Response, type Request } from 'express'
import * as dotenv from 'dotenv'
dotenv.config()
const {
  SECRET
} = process.env

type FuncNext = () => void
export interface RequestExtend extends Request {
  user?: any
}

export const verifyToken = async (req: RequestExtend, res: Response, next: FuncNext): Promise<void> => {
  const { headers: { authorization } } = req
  if (authorization && (authorization as string).toLowerCase().startsWith('bearer ')) {
    const token = (authorization).substring(7)
    jwt.verify(token, SECRET as string, (err, user): any => {
      if (err) {
        res.status(403).send({
          status_code: 403,
          error: 'Token missing or invalid!'
        })
        return
      };
      req.user = user
      next()
    })
  } else {
    res.status(401).json({
      status_code: 401,
      error: 'You are not authenticated!'
    })
  };
}

export const verifyTokenAndAdmin = async (req: RequestExtend, res: Response, next: NextFunction): Promise<void> => {
  await verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next()
    } else {
      res.status(403).json({
        status_code: 403,
        error: 'You are not alowed!'
      })
    };
  })
}
