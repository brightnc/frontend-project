import usePosts from '../hooks/usePosts'
import CardPost from './CardPost'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import PaginationComp from './Pagination'

const Main = () => {
  const { isLoading, posts } = usePosts()
  if (posts === null) {
    throw new TypeError('The value was promised to always be there!')
  }
  const [currentPage, setCurrentPage] = useState<number>(1)
  const postsPerPage: number = 12
  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPosts = posts.slice(firstPostIndex, lastPostIndex)

  if (isLoading) return <h1>Loading....</h1>

  return (
    <div>
      <div className="mt-9 flex justify-end">
        <Link to={'/create'}>
          <button className="bg-[#ff741c]  border border-black hover:bg-black text-black hover:border-[#ff741c] hover:border hover:text-[#ff741c] font-bold rounded-lg px-8 py-4 text-lg shadow-lg shadow-orange-500/50">
            Create new content
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-8 mt-11">
        {posts &&
          currentPosts.map((post) => {
            return <CardPost key={post.id} post={post} />
          })}
      </div>
      <div className="w-full flex justify-center mt-8 ">
        <PaginationComp postPerPage={postsPerPage} totalPosts={posts.length} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  )
}

export default Main
