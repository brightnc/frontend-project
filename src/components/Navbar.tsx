import logo from '../assets/logo.svg'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full fixed top-0 h-auto py-7 px-16 bg-black text-white z-50  ">
      <a href="/">
        <div className="flex items-center">
          <img className="w-12 h-12" src={logo} alt="LearnHub logo" />
          <span className="text-3xl font-bold">LearnHub</span>
        </div>
      </a>

      <div className="flex w-1/6 justify-between items-center">
        <div className="flex items-center ">
          <a className="flex items-center gap-2" href="#">
            <PermIdentityIcon />
            Profile
          </a>
        </div>
        <a href="#">Login</a>
      </div>
    </div>
  )
}

export default Navbar
