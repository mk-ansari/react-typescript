import {  createContext } from 'react'
import { userData } from './userData'



type UserContextProviderProps = {
  children: React.ReactNode
}

export const UserContext = createContext(userData)

export const UserContextProvider = ({
  children
}: UserContextProviderProps) => {
  return <UserContext.Provider value={userData}>{children}</UserContext.Provider>
}