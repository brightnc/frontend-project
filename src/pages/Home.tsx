import Header from '../components/Header'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <Navbar />
        <Header />
        <hr className="border-y-black w-full " />
      </div>
    </>
  )
}

export default Home
