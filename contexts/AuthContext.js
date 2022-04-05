import React, { createContext, useEffect, useState } from 'react'
import { onStateChanged } from '../firebase/client'

export const AuthContext = createContext(undefined)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    return onStateChanged((user) => {
      setUser(user)
    })
  }, [])

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  )
}
