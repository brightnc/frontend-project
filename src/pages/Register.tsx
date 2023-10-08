const Register = () => {
  return (
    <div className=" h-screen flex flex-col justify-center items-center w-full">
      <div className="w-auto h-auto">
        <form action="" className=" flex flex-col gap-5">
          <div className="flex justify-center text-3xl mb-3">
            <h1 className="text-[#ff741c]">Sign up</h1>
          </div>
          <label htmlFor="yourName">Your name</label>
          <input id="yourName" className="text-black px-2 py-1 rounded-lg w-96" type="text" required />
          <label htmlFor="usernameSignUp">Username</label>
          <input id="usernameSignUp" className="text-black px-2 py-1 rounded-lg w-96" type="text" required />
          <label htmlFor="passwordSignUp">Password</label>
          <input id="passwordSignUp" className="text-black px-2 py-1  rounded-lg" type="password" required />
          <label htmlFor="confirmPassword">Confirm password</label>
          <input id="confirmPassword" className="text-black px-2 py-1  rounded-lg" type="password" required />
          <button
            type="submit"
            className="w-full shadow-lg shadow-orange-500/50 bg-[#ff741c] border border-black hover:bg-black text-black hover:border-[#ff741c] hover:border hover:text-[#ff741c] py-3 rounded-lg mt-4 "
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
