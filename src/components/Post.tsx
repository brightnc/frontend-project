import { PostDTO } from '../types/dto'

interface IPostProps {
  post: PostDTO
}
const Post = ({ post }: IPostProps) => {
  return (
    <div className="flex flex-col border border-black rounded-lg">
      <div>
        <img className="w-full aspect-video object-cover rounded-lg" src={post.thumbnailUrl} alt={post.videoTitle} />
      </div>
      <div className="p-3 ">
        <div className="detailGroup">
          <div className="titleGroup">
            <h4 className="font-bold text-lg">{post.videoTitle}</h4>
            <p>{post.creatorName}</p>
          </div>
          <h5 className="italic">{post.comment}</h5>
        </div>
        <div className="detailRow">
          <p>{post.postedBy.name}</p>
        </div>
      </div>
    </div>
  )
}

export default Post
