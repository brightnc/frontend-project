import { ReactNode, createContext, useContext, useState } from 'react'
import { CredentialDTO, LoginDTO } from '../types/dto'
import axios from 'axios'
interface IAuthProviderProps {
  children: ReactNode
}

interface IAuthContext {
  isLoggedIn: boolean
  login: (username: string, password: string) => Promise<void>
  username: string | null
  errMsg: string | null
  logout: () => void
}
const token = localStorage.getItem('token')
const user = localStorage.getItem('username')
const AuthContext = createContext<IAuthContext | null>(null)

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!token)
  const [username, setUsername] = useState<string | null>(user)

  const [errMsg, setErrMsg] = useState<string | null>('')

  const login = async (username: string, password: string) => {
    const loginBody: LoginDTO = { username, password }

    const url = 'http://localhost:8000/api/v1/login'
    try {
      const res = await axios.post<CredentialDTO>(url, loginBody, { headers: { 'Content-Type': 'application/json' } })
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('username', username)
      setIsLoggedIn(true)
      setUsername(username)
    } catch (error) {
      setErrMsg('Invalid username or password !')
      throw new Error('Invalid username or password !')
    }
  }
  const logout = async () => {
    const url = 'http://localhost:8000/api/v1/logout'
    try {
      const token = localStorage.getItem('token')

      await axios.post(
        url,
        {},
        {
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        },
      )

      setIsLoggedIn(false)
      localStorage.clear()
      setUsername(null)
    } catch (error) {
      console.error(error)
      throw new Error('Invalid token')
    }
  }
  return <AuthContext.Provider value={{ isLoggedIn, login, logout, username, errMsg }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}

export default AuthProvider
