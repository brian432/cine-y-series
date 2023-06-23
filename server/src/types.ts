import { type Types } from 'mongoose'
import { Request } from "express";

export interface IUser {
  username: string
  passwordHash: string
  favs?: Types.ObjectId[]
}

export interface UserToken {
  id: Types.ObjectId
}

export interface IFavs {
  data: {
    poster_path: string
    id: string
    title?: string
    name?: string
    vote_average: number
  }
  path: string
  user: Types.ObjectId
  _id: Types.ObjectId
}

export interface RequestMasPropUser extends Request {
  user?: {
    id: string
    isAdmin: boolean
    iat: number
    exp: number
  }
}