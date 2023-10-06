import { TypeAnimation } from 'react-type-animation'
const Header = () => {
  return (
    <div className=" flex flex-col items-center justify-center gap-3 h-[50vh]">
      <h1 className="text-7xl font-extrabold">LearnHub</h1>
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
  )
}

export default Header
