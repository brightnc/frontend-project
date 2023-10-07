import { useState } from 'react'

const CreatePost = () => {
  const [currentLength, setCurrentLength] = useState<number>(0)
  const maxLength = 250
  return (
    <div className=" h-screen flex flex-col justify-center items-center w-full ">
      <div className="w-2/3 h-4/5 flex flex-col justify-center items-center">
        <div className="flex flex-col gap-4 w-full">
          <label>Video URL</label>
          <input className="text-black px-2 py-1 rounded-lg w-full" type="text" />
          <label>Comment</label>
          <textarea
            onChange={(e) => setCurrentLength(e.target.value.length)}
            maxLength={maxLength}
            className="w-full p-4 h-52 text-lg  text-black shadow-md shadow-white resize-none rounded-md"
          ></textarea>
          <div className="flex justify-end">
            <span>{currentLength}</span>
            <span>/</span>
            <span>{maxLength}</span>
          </div>
          <button className="bg-[#ff741c]   border border-black hover:bg-black text-black hover:border-[#ff741c] hover:border hover:text-[#ff741c] font-bold rounded-lg px-8 py-4 text-lg shadow-lg shadow-orange-500/50">
            Post
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreatePost
