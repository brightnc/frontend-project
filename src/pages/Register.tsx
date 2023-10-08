import { useForm, SubmitHandler } from 'react-hook-form'
interface IFormRegisterInput {
  name: string
  username: string
  password: string
  confirmPassword: string
}

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IFormRegisterInput>()
  const onSubmit: SubmitHandler<IFormRegisterInput> = (data) => console.log(data)
  const password: string = watch('password')

  return (
    <div className=" h-screen flex flex-col justify-center items-center w-full">
      <div className="w-auto h-auto">
        <form action="" className=" flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center text-3xl mb-3">
            <h1 className="text-[#ff741c]">Sign up</h1>
          </div>
          <label htmlFor="yourName">Your name</label>
          <input
            id="yourName"
            {...register('name')}
            className="text-black px-2 py-1 rounded-lg w-96"
            type="text"
            placeholder="Name"
            required
          />

          {/* ----- Username ------ */}

          <div className="flex flex-col gap-2">
            <label htmlFor="usernameSignUp">Username</label>
            <input
              id="usernameSignUp"
              {...register('username', {
                required: 'Username should have at least 4 characters',
                minLength: { value: 4, message: 'Username should have at least 4 characters' },
              })}
              className="text-black px-2 py-1 rounded-lg w-96"
              type="text"
              placeholder="Username"
            />
            {errors.username && <p className="text-gray-300 font-thin">{errors.username.message}</p>}
          </div>

          {/* ----- Password ------ */}
          <div className="flex flex-col gap-2">
            <label htmlFor="passwordSignUp">Password</label>
            <input
              id="passwordSignUp"
              {...register('password', {
                required: 'Password should have at least 6 characters',
                minLength: { value: 6, message: 'Password should have at least 6 characters' },
              })}
              className="text-black px-2 py-1  rounded-lg"
              type="password"
              placeholder="******"
            />
            {errors.password && <p className="text-gray-300 font-thin">{errors.password.message}</p>}
          </div>

          {/* ----- Confirm Password ------ */}

          <div className="flex flex-col gap-2">
            <label htmlFor="confirmPassword">Confirm password</label>
            <input
              id="confirmPassword"
              {...register('confirmPassword', {
                required: 'Confirm password should have at least 6 characters',
                minLength: { value: 6, message: 'Confirm password  should have at least 6 characters' },
                validate: (v) => {
                  return v === password || 'Password not match'
                },
              })}
              className="text-black px-2 py-1  rounded-lg"
              type="password"
              placeholder="******"
            />
            {errors.confirmPassword && <p className="text-gray-300 font-thin">{errors.confirmPassword.message}</p>}
          </div>
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
