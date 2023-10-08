import { useParams } from 'react-router-dom'
import usePost from '../hooks/usePost'
import { FaRegEdit } from 'react-icons/fa'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'
import { Link } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'

const Post = () => {
  const { id } = useParams()
  const { post, isLoading, error, deletePost } = usePost(id || '1')
  const { isLoggedIn, username } = useAuth()

  const handleDelete = () => {
    deletePost()
  }

  if (isLoading) return <h1>Loading...</h1>
  if (error) return <h1>{error}</h1>
  return (
    <div className=" h-screen flex flex-col justify-center items-center w-full">
      {post && (
        <div className="w-full h-4/5 flex justify-center items-center ">
          <div className="grid grid-cols-2 gap-3  border border-black rounded-lg">
            <div className="col-span-1">
              <iframe
                className="w-full aspect-video object-cover rounded-lg "
                src={post.videoUrl}
                width="100%"
                height="100%"
              />
            </div>
            <div className="p-3 flex flex-col gap-20">
              <div className="detailGroup flex flex-col gap-12">
                <div className="titleGroup">
                  <h4 className="font-bold text-2xl">{post.videoTitle}</h4>
                  <p className="text-base text-[#AAAAAA]">{post.creatorName}</p>
                </div>
                <div className="relative italic text-3xl text-yellow-200 before:content-['“'] before:text-8xl before:text-slate-400   ">
                  <p className="absolute top-8 left-16 ">{post.comment}</p>
                </div>

                <div className="flex flex-col gap-2 items-end">
                  <p className="text-lg  ">
                    Posted by<span className="mx-1 text-xl">—</span>
                    {post.postedBy.name}
                  </p>
                  <p>{post.createdAt}</p>
                  <p>(Updated on {post.updatedAt})</p>
                  {isLoggedIn && username === post.postedBy.username && (
                    <div className="flex gap-6">
                      <Link
                        to={`/posts/${post.id}/edit`}
                        className="text-lg text-[#ff741c] font-bold flex items-center gap-2"
                      >
                        <FaRegEdit />
                        Edit
                      </Link>
                      <button
                        onClick={handleDelete}
                        className="text-lg text-[#ff741c] font-bold flex items-center gap-1"
                      >
                        <DeleteForeverOutlinedIcon />
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Post
