import { useState } from 'react'

const CreatePost = () => {
  const [currentLength, setCurrentLength] = useState<number>(0)
  const maxLength = 250
  return (
    <div className=" h-screen flex flex-col justify-center items-center w-full ">
      <div className="w-2/3 h-4/5 flex flex-col justify-center items-center">
        <div className="w-full">
          <form className="flex flex-col gap-4 w-full">
            <label htmlFor="video-url">Video URL</label>
            <input
              id="video-url"
              className="text-black px-2 py-1 rounded-lg w-full"
              type="text"
              placeholder="URL"
              required
            />
            <label htmlFor="comment">Comment</label>
            <textarea
              id="comment"
              onChange={(e) => setCurrentLength(e.target.value.length)}
              maxLength={maxLength}
              placeholder="Enter text here"
              className="w-full p-4 h-52 text-lg  text-black shadow-md shadow-white resize-none rounded-md"
            ></textarea>
            <div className="flex justify-end">
              <span>{currentLength}</span>
              <span>/</span>
              <span>{maxLength}</span>
            </div>
            <button
              type="submit"
              className="bg-[#ff741c]   border border-black hover:bg-black text-black hover:border-[#ff741c] hover:border hover:text-[#ff741c] font-bold rounded-lg px-8 py-4 text-lg shadow-lg shadow-orange-500/50"
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
