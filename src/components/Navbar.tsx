import logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full sticky top-0">
      <a href="/">
        <div className="flex items-center">
          <img className="w-12 h-12" src={logo} alt="LearnHub logo" />
          <span className="text-3xl font-bold">LearnHub</span>
        </div>
      </a>

      <div>
        <a href="#">Login</a>
      </div>
    </div>
  )
}

export default Navbar
