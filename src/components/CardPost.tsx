import { Link } from 'react-router-dom'
import { PostDTO } from '../types/dto'

interface ICardPostProps {
  post: PostDTO
}
const CardPost = ({ post }: ICardPostProps) => {
  return (
    <div className="flex flex-col border border-black rounded-lg">
      <Link to={`/posts/${post.id}`}>
        <div>
          <img
            className="w-full aspect-video object-cover rounded-lg  "
            src={post.thumbnailUrl}
            alt={post.videoTitle}
          />
        </div>
        <div className="p-3 ">
          <div className="detailGroup">
            <div className="titleGroup">
              <h4 className="font-bold text-lg">{post.videoTitle}</h4>
              <p className="text-base text-[#AAAAAA]">{post.creatorName}</p>
            </div>
            <h5 className="italic text-sm text-yellow-200">{post.comment}</h5>
          </div>
          <div className="detailRow">
            <p className="text-lg text-[#AAAAAA]">{post.postedBy.name}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CardPost
