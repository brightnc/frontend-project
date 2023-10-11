// import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import CreatePost from './pages/CreatePost'
import Post from './pages/Post'
import Edit from './pages/Edit'
import GuardedRoute from './guard/GuardedRoute'
import { useAuth } from './providers/AuthProvider'

function App() {
  const { isLoggedIn } = useAuth()
  return (
    <>
      <Navbar />
      <div className=" px-16  font-Kanit">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<Post />} />
          {/* Can't go to this path if a user is not log in  */}
          <Route element={<GuardedRoute isRouteAccessible={isLoggedIn} redirectRoute="/login" />}>
            <Route path="/create" element={<CreatePost />} />
            <Route path="/posts/:id/edit" element={<Edit />} />
          </Route>
          {/* Can't go to this path if a user is log in  */}
          <Route element={<GuardedRoute isRouteAccessible={!isLoggedIn} redirectRoute="/" />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
