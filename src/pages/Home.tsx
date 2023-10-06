import Header from '../components/Header'
import Main from '../components/Main'

const Home = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <Header />
        <hr className="border-y-black w-full " />
      </div>
      <Main />
    </>
  )
}

export default Home
