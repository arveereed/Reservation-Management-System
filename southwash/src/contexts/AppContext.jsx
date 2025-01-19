import { createContext, useContext, useState } from "react";

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const adminAcc = { username: 'admin', password: 'admin' }
  const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'))

  const setToken = (token) => {
    _setToken(token)

    if (token) {
      localStorage.setItem('ACCESS_TOKEN', token)
    }
  }

  return (
    <AppContext.Provider value={{
      token,
      setToken,
      adminAcc
    }}>
      {children}
    </AppContext.Provider>
  )
}