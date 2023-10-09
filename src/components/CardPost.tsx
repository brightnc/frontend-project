import { Link } from 'react-router-dom'
import { PostDTO } from '../types/dto'
import Rating from '@mui/material/Rating'
import { styled } from '@mui/material/styles'
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined'

interface ICardPostProps {
  post: PostDTO
}
const CardPost = ({ post }: ICardPostProps) => {
  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: 'yellow',
    },
    '& .MuiRating-iconHover': {
      color: 'yellow',
    },
  })
  return (
    <div className="flex flex-col border border-black rounded-lg gap-6">
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
          <div className="flex justify-between items-center">
            <p className="text-lg text-[#AAAAAA]">{post.postedBy.name}</p>
            <StyledRating
              name="customized-color"
              size="small"
              readOnly
              value={post.rating}
              icon={<StarOutlinedIcon fontSize="inherit" />}
              emptyIcon={<StarOutlineOutlinedIcon color="warning" fontSize="inherit" />}
            />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CardPost
