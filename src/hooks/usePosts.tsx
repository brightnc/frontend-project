import { useEffect, useState } from 'react'
import { DataDTO, PostDTO } from '../types/dto'
import axios from 'axios'

const usePosts = () => {
  const [posts, setPosts] = useState<PostDTO[] | null>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const url: string = 'https://api.learnhub.thanayut.in.th/content'
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get<DataDTO>(url)
        setPosts(res.data.data)
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
