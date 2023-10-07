const CreatePost = () => {
  return (
    <div className=" h-screen flex flex-col justify-center items-center w-full ">
      <div className="w-2/3 h-4/5 flex flex-col justify-center items-center">
        <div className="flex flex-col gap-6 w-full">
          <label>Video URL</label>
          <input className="text-black px-2 py-1 rounded-lg w-full" type="text" />
          <label>Comment</label>
          <textarea className="w-full p-4 h-52 text-lg  text-black shadow-md shadow-white resize-none rounded-md"></textarea>
          <button className="bg-[#ff741c]   border border-black hover:bg-black text-black hover:border-[#ff741c] hover:border hover:text-[#ff741c] font-bold rounded-lg px-8 py-4 text-lg shadow-lg shadow-orange-500/50">
            Post
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreatePost
