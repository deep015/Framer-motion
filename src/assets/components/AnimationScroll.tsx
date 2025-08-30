import { useTransform ,useScroll,motion} from "framer-motion"

const AnimationScroll = () => {
    const {scrollY}= useScroll()
    const scale = useTransform (scrollY,[0,1000],[1,2])
    const borderRadius = useTransform (scrollY,[0,1000],["0%","50%"])
  return (
    <div className="relative h-screen overflow-hidden">
        <motion.img src="https://images.unsplash.com/photo-1755327814789-1c299169187c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4NHx8fGVufDB8fHx8fA%3D%3D"
         alt="background" className="absolute inset-0 object-cover w-full h-full"
         style={{scale,borderRadius}}/>

         <div className="sticky top-0 h-screen flex items-center justify-center">
            <h1 className="text-white text-4xl">
                SCROLL TO ANIMATE
            </h1>
         </div>
    </div>
  )
}

export default AnimationScroll