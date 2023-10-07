import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'
import LoginIcon from '@mui/icons-material/Login'

const Navbar = () => {
  const isLoggedIn: boolean = false
  return (
    <div className="flex items-center justify-between w-full fixed top-0 h-auto py-7 px-16 bg-black text-white z-50  ">
      <NavLink to={'/'}>
        <div className="flex items-center">
          <img className="w-12 h-12" src={logo} alt="LearnHub logo" />
          <span className="text-3xl font-bold">LearnHub</span>
        </div>
      </NavLink>
      {isLoggedIn ? (
        //  <--- Logout --->
        <>
          <div className="flex items-center ">
            <a className="flex items-center gap-2" href="#">
              <LoginIcon />
              Logout
            </a>
          </div>
        </>
      ) : (
        //  <--- Login --->
        <div className="flex">
          <NavLink className={({ isActive }) => (isActive ? 'font-extrabold' : '')} to="/login">
            <div className="flex items-center ">
              <a className="flex items-center gap-2" href="#">
                <LoginIcon />
                Login
              </a>
            </div>
          </NavLink>
          <span className="mx-1">/</span>
          <NavLink className={({ isActive }) => (isActive ? 'font-extrabold' : '')} to="/register">
            Sign up
          </NavLink>
        </div>
      )}
    </div>
  )
}

export default Navbar
