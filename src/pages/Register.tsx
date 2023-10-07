const Register = () => {
  return (
    <div className=" h-screen flex flex-col justify-center items-center w-full">
      <div className="w-auto h-auto">
        <form action="" className=" flex flex-col gap-5">
          <div className="flex justify-center text-3xl mb-3">
            <h1 className="text-[#ff741c]">Sign up</h1>
          </div>
          <label>Your name</label>
          <input className="text-black px-2 py-1 rounded-lg w-96" type="text" />
          <label>Username</label>
          <input className="text-black px-2 py-1 rounded-lg w-96" type="text" />
          <label>Password</label>
          <input className="text-black px-2 py-1  rounded-lg" type="password" />
          <label>Confirm password</label>
          <input className="text-black px-2 py-1  rounded-lg" type="password" />
          <button className="w-full shadow-lg shadow-orange-500/50 bg-[#ff741c] border border-black hover:bg-black text-black hover:border-[#ff741c] hover:border hover:text-[#ff741c] py-3 rounded-lg mt-4 ">
            Sign up
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
