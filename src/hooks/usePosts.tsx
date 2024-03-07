import { useEffect, useState } from 'react'
import { PostDTO } from '../types/dto'
import axios from 'axios'

const usePosts = () => {
  const [posts, setPosts] = useState<PostDTO[] | null>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const url: string = 'http://localhost:8000/api/v1/content'
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get<PostDTO[]>(url)
        setPosts(res.data)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  return { posts, isLoading }
}

export default usePosts
