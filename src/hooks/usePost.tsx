import { useEffect, useState } from 'react'
import { PostDTO, UpdateContentDTO } from '../types/dto'
import axios from 'axios'
import { useNavigate } from 'react-router'

const usePost = (id: string) => {
  const [post, setPost] = useState<PostDTO | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const url: string = 'http://localhost:8000/api/v1/content/'
  const [postRating, setPostRating] = useState<number>(0)
  const [comment, setComment] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get<PostDTO>(url + id)
        const newDate = toDate(res.data.createdAt)
        const newUpdate = toDate(res.data.updatedAt)
        setPost({ ...res.data, createdAt: newDate, updatedAt: newUpdate })
        setPostRating(res.data.rating)
        setComment(res.data.comment)
      } catch (error) {
        setError('Cannot get post id : ' + id)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [id])

  const toDate = (d: string) => {
    const date = new Date(d)
    return date.toDateString()
  }
  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  const deletePost = async () => {
    try {
      await axios.delete(url + id, {
        headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token },
      })
      navigate('/')
    } catch (error) {
      setError('Cannot delete post id : ' + id)
    }
  }

  const updatePost = async (content: UpdateContentDTO) => {
    const token = localStorage.getItem('token')
    try {
      await axios.patch<PostDTO>(url + id, content, {
        headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token },
      })
      navigate('/')
    } catch (error) {
      throw new Error('Can not update content !')
    }
  }

  return { post, isLoading, error, deletePost, postRating, setPostRating, updatePost, setComment, comment }
}

export default usePost
