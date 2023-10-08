import { NavLink, useNavigate } from 'react-router-dom'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import logo from '../assets/logo.svg'
import LoginIcon from '@mui/icons-material/Login'
import { useAuth } from '../providers/AuthProvider'

const Navbar = () => {
  const { isLoggedIn, logout, username } = useAuth()

  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }
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
        <div className="flex gap-10">
          <div className="flex items-center ">
            <p className="flex items-center gap-2">
              <AccountCircleOutlinedIcon />
              {username}
            </p>
          </div>
          <div className="flex items-center ">
            <button onClick={handleLogout} className="flex items-center gap-2">
              <LoginIcon />
              Logout
            </button>
          </div>
        </div>
      ) : (
        //  <--- Login --->
        <div className="flex">
          <NavLink className={({ isActive }) => (isActive ? 'font-extrabold' : '')} to="/login">
            <div className="flex items-center ">
              <p className="flex items-center gap-2">
                <LoginIcon />
                Log in
              </p>
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
