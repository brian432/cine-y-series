//login types

import { DataHome, IFavs } from "./commonTypes"

export interface IUser {
  username: string
  password: string
}


// Register types ------------------------------

interface CreateUpdate {
  createdAt: string
  updatedAt: string
}

export interface IRegisterResponse extends CreateUpdate {
  username: string
  id: string
}

export interface ResponseDataRegister {
  status_code: number
  data: IRegisterResponse
}

export interface IRegisterPost extends Pick<IRegisterResponse, 'username'> {
  password: string
}

// login types ------------------------------

export interface ILogin extends Omit<IRegisterPost, 'isAdmin'> { }

export interface ILoginResponse {
  username: string
  id: string
  favs: string[]
}

export interface ResponseDataLogin {
  status_code: number
  data: ILoginResponse
}

//favs types

export interface ResponseDataFavs {
  status_code: number
  data: IFavs
}

export interface ResponseAllDataFavs {
  status_code: number
  data: IFavs[]
}