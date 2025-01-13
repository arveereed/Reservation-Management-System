import { createContext, useContext, useState } from "react";

const AppContext = createContext({
  user: null,
  token: null,
  setUser: () => {},
  setToken: () => {},
})

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'))

  const setToken = (token) => {
    _setToken(token)

    if (token) {
      localStorage.setItem('ACCESS_TOKEN', token)
    }
  }

  return (
    <AppContext.Provider value={{
      user,
      token,
      setUser,
      setToken
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)