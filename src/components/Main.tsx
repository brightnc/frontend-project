import Pagination from '@mui/material/Pagination'
import usePosts from '../hooks/usePosts'
import Post from './Post'

const Main = () => {
  const { isLoading, posts } = usePosts()

  if (isLoading) return <h1>Loading....</h1>

  return (
    <div>
      <div className="mt-9 flex justify-end">
        <button className="bg-[#ff741c] border border-black hover:bg-black text-black hover:border-[#ff741c] hover:border hover:text-[#ff741c] font-bold rounded-lg px-8 py-4 text-lg">
          Create new content
        </button>
      </div>
      <div className="grid grid-cols-4 gap-8 mt-8">
        {posts &&
          posts.map((post) => {
            return <Post key={post.id} post={post} />
          })}
      </div>
      <div className="w-full flex justify-center mt-8">
        <Pagination />
      </div>
    </div>
  )
}

export default Main
