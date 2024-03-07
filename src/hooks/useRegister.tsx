import { useNavigate } from 'react-router-dom'
import { RegisterDTO } from '../types/dto'
import axios from 'axios'

const useRegister = () => {
  const navigate = useNavigate()
  const registerUser = async (body: RegisterDTO) => {
    const url = 'http://localhost:8000/api/v1/register'
    try {
      await axios.post(url, body, {
        headers: { 'Content-Type': 'application/json' },
      })
      navigate('/login')
    } catch (error) {
      throw new Error('Can not Sign up !')
    }
  }
  return { registerUser }
}

export default useRegister
