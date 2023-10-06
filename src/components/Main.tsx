import usePosts from '../hooks/usePosts'
import Post from './Post'

const Main = () => {
  const { posts, isLoading } = usePosts()

  if (isLoading) return <h1>Loading....</h1>

  return (
    <div>
      <div className="mt-8 flex justify-end">
        <button className="bg-[#ff741c] hover:bg-black text-black hover:text-[#ff741c] font-bold rounded-lg px-8 py-4 text-lg">
          Create new content
        </button>
      </div>
      <div className="grid grid-cols-4 gap-8 mt-8">
        {posts &&
          posts.map((post) => {
            return <Post key={post.id} post={post} />
          })}
      </div>
    </div>
  )
}

export default Main
