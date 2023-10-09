import { FormEvent, useState } from 'react'
import { useParams } from 'react-router-dom'
import usePost from '../hooks/usePost'
import Rating from '@mui/material/Rating'
import { styled } from '@mui/material/styles'
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined'

const Edit = () => {
  const [currentLength, setCurrentLength] = useState<number>(0)
  const maxLength = 250
  const { id } = useParams()
  const { post, isLoading, error } = usePost(id || '1')
  const [comment, setComment] = useState('')
  const [rating, setRating] = useState<number | null>(null)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log(comment)
    setComment('')
    setCurrentLength(0)
  }

  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: 'yellow',
    },
    '& .MuiRating-iconHover': {
      color: 'yellow',
    },
  })

  if (isLoading) return <h1>Loading...</h1>
  if (error) return <h1>{error}</h1>

  return (
    <div className=" h-screen flex flex-col justify-center items-center w-full ">
      <div className="w-2/3 h-4/5 flex flex-col justify-center items-center">
        <div className="w-full">
          {!isLoading && post && (
            <>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
                <label htmlFor="comment">Edit Comment</label>
                <textarea
                  id="comment"
                  onChange={(e) => {
                    setComment(e.target.value)
                    setCurrentLength(e.target.value.length)
                  }}
                  value={comment}
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
                  className="bg-[#ff741c]   border border-black hover:bg-black text-black hover:border-[#ff741c] hover:border hover:text-[#ff741c] font-bold rounded-lg px-8 py-4 text-lg shadow-lg shadow-orange-500/50"
                >
                  Post
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Edit
