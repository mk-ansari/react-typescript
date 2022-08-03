import React, { useState, createContext, Dispatch, SetStateAction } from 'react'

interface IUserData {
  name: string
  email: string
}

interface UserContextType {
  user: IUserData | null
  setUser: Dispatch<SetStateAction<IUserData | null>>
}

type UserContextProviderProps = {
  children: React.ReactNode
}

// export const UserContext = createContext<UserContextType | null>(null)
export const UserContext = createContext({} as UserContextType)

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<IUserData | null>({
    name:"kamal", email:"aksas"
  })
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}