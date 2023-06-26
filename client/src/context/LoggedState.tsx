'use client'
import React, { type Dispatch, createContext, useReducer, type ReactNode, type FC } from 'react'

export type AppState = typeof initialState
interface Action {
  type: 'logged' | 'logout'
  payload: typeof initialState
}

interface AppContext {
  state: AppState
  dispatch: Dispatch<Action>
}

interface Props {
  children: ReactNode
}
const initialState = {
  isLogged: !!sessionStorage.getItem('token'),
  favs: [''] // utilizo sessionStorage par verificar si el login fue exitoso y persistir el estado
}

export const Reducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'logged':
      return action.payload
    case 'logout':
      sessionStorage.removeItem('token')
      return action.payload
    default:
      return state
  }
}

export const Context = createContext<AppContext>({
  state: initialState,
  dispatch: () => { }
})

export const Provider: FC<Props> = ({ children }: Props) => {
  const [state, dispatch] = useReducer(Reducer, initialState)
  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  )
}