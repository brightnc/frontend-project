import { FormEvent, useState } from 'react'
import Rating from '@mui/material/Rating'
import { styled } from '@mui/material/styles'
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined'
import useCreatePost from '../hooks/useCreatePost'

const CreatePost = () => {
  const [currentLength, setCurrentLength] = useState<number>(0)
  const [rating, setRating] = useState<number | null>(0)
  const [videoUrl, setVideoUrl] = useState<string>('')
  const [comment, setComment] = useState<string>('')
  const { createPost } = useCreatePost()
  // const [contentBody, setContentBody] = useState<CreateContentDTO>({
  //   videoUrl: '',
  //   comment: '',
  //   rating: 0,
  // })
  const maxLength = 250

  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: 'yellow',
    },
    '& .MuiRating-iconHover': {
      color: 'yellow',
    },
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await createPost({
        videoUrl: videoUrl,
        comment: comment,
        rating: rating || 0,
      })
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className=" h-screen flex flex-col justify-center items-center w-full ">
      <div className="w-2/3 h-4/5 flex flex-col justify-center items-center">
        <div className="w-full">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            <label htmlFor="video-url" className="text-lg">
              Video URL :
            </label>
            <input
              id="video-url"
              className="text-black px-2 py-1 rounded-lg w-full"
              type="text"
              placeholder="URL"
              required
              onChange={(e) => setVideoUrl(e.target.value)}
            />
            <label htmlFor="comment" className="text-lg">
              Comment :
            </label>
            <textarea
              id="comment"
              onChange={(e) => {
                setCurrentLength(e.target.value.length)
                setComment(e.target.value)
              }}
              maxLength={maxLength}
              placeholder="Enter text here"
              className="w-full p-4 h-52 text-lg  text-black shadow-md shadow-white resize-none rounded-md"
            ></textarea>
            <div className="flex justify-end">
              <span>{currentLength}</span>
              <span>/</span>
              <span>{maxLength}</span>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-lg">Rating :</p>
              <StyledRating
                name="customized-color"
                size="large"
                value={rating}
                onChange={(_, newValue) => {
                  setRating(newValue)
                }}
                icon={<StarOutlinedIcon fontSize="inherit" />}
                emptyIcon={<StarOutlineOutlinedIcon color="warning" fontSize="inherit" />}
              />
            </div>
            <button
              type="submit"
              className="bg-[#ff741c]   border border-black hover:bg-black text-black hover:border-[#ff741c] hover:border hover:text-[#ff741c] font-bold rounded-lg mt-4 px-8 py-4 text-lg shadow-lg shadow-orange-500/50"
            >
              Post
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreatePost
