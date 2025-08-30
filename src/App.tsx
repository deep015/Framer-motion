import AnimationScroll from "./assets/components/AnimationScroll"

const App = () => {
  return (
    <div>
      <AnimationScroll />
      <div className="h-[200vh] bg-gray-800 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Scroll Down</h1>
      </div>
    </div>
  )
}

export default App