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
    backdrop_path: string;
    first_air_date?: Date;
    genre_ids: number[];
    id: number;
    name?: string;
    origin_country?: string[];
    original_language: string;
    original_name?: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
    adult?: boolean;
    original_title?: string;
    release_date?: Date;
    title?: string;
    video?: boolean;
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