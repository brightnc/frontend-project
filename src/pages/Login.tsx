import { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'

const Login = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { login, errMsg } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await login(username, password)
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className=" h-screen flex flex-col justify-center items-center w-full">
      <div className="w-auto h-auto gap-6 flex flex-col">
        <form onSubmit={handleSubmit} className=" flex flex-col gap-5">
          <div className="flex justify-center text-3xl mb-3">
            <h1 className="text-[#ff741c]">Sign in</h1>
          </div>
          <label htmlFor="username">Username</label>
          <input
            required
            id="username"
            className="text-black px-2 py-1 rounded-lg w-96"
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            className="text-black px-2 py-1  rounded-lg"
            type="password"
            required
            placeholder="**********"
            onChange={(e) => setPassword(e.target.value)}
          />
          {errMsg && <p>{errMsg}</p>}
          <button
            type="submit"
            className="w-full shadow-lg shadow-orange-500/50 bg-[#ff741c] border border-black hover:bg-black text-black hover:border-[#ff741c] hover:border hover:text-[#ff741c]  py-3 rounded-lg mt-4 "
          >
            Sign in
          </button>
        </form>
        <div className="flex w-full gap-7">
          <span className="font-light text-[#AAAAAA]">Don&apos;t have an account?</span>
          <Link to={'/register'} className="underline font-bold text-[#e7dcdc] ">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
