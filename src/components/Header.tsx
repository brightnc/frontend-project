import { TypeAnimation } from 'react-type-animation'
const Header = () => {
  return (
    <>
      <div className=" flex flex-col items-center justify-center gap-3 h-screen relative ]">
        <h1 className="text-7xl font-extrabold ">LearnHub</h1>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed once, initially
            'Hub for Educational Videos',
            1000,
            '',
            1000,
          ]}
          style={{ fontSize: '2em' }}
          repeat={Infinity}
          deletionSpeed={60}
        />
      </div>
      <div className="h-auto mt-20 absolute bottom-36">
        <a
          href="#create"
          className="animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center "
        >
          <svg
            id="create"
            className="w-6 h-6 text-violet-500"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
      <hr />
    </>
  )
}

export default Header
