'use client'
import { getCookie, deleteCookie } from 'cookies-next';
import React, { type Dispatch, createContext, useReducer, type ReactNode, type FC, useEffect } from 'react'

export type AppState = typeof initialState
interface Action {
  type: 'logged' | 'logout'
  payload: typeof initialState
}

interface AppContext {
  state: AppState
  dispatch: Dispatch<Action>
  handleLogout: () => void
}

interface Props {
  children: ReactNode
}

const initialState = {
  isLogged: false
}

export const Reducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'logged':
      return action.payload
    case 'logout':
      return action.payload
    default:
      return state
  }
}

export const Context = createContext<AppContext>({
  state: initialState,
  dispatch: () => { },
  handleLogout: () => { }
})

export const Provider: FC<Props> = ({ children }: Props) => {
  const [state, dispatch] = useReducer(Reducer, initialState)
  const token = getCookie('token')

  useEffect(() => {
    const isLogged = !!token;
    dispatch({
      type: 'logged',
      payload: {
        isLogged
      }
    })
  }, [token])

  const handleLogout = () => {
    deleteCookie('token')
    dispatch({
      type: 'logout',
      payload: initialState
    })
  }

  return (
    <Context.Provider value={{ state, dispatch, handleLogout }}>
      {children}
    </Context.Provider>
  )
}