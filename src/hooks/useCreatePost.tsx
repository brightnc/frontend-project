import axios from 'axios'
import { CreateContentDTO, PostDTO } from '../types/dto'
import { useNavigate } from 'react-router-dom'

const useCreatePost = () => {
  const navigate = useNavigate()
  const createPost = async (content: CreateContentDTO) => {
    const url = 'https://api.learnhub.thanayut.in.th/content'
    const token = localStorage.getItem('token')
    try {
      await axios.post<PostDTO>(url, content, {
        headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token },
      })
      navigate('/')
    } catch (error) {
      throw new Error('Can not create content !')
    }
  }
  return { createPost }
}

export default useCreatePost
