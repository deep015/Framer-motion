import {motion,useMotionValue, useTransform } from "framer-motion"
const DraggableBox = () => {
     const x= useMotionValue(0) 
     const y = useMotionValue(0)

    const backgroundColor = useTransform(x,[-100,100],["#ff0000","#00ff00"])
  return (
    <motion.div drag style={{x,y,backgroundColor}}
     dragConstraints={{left:-200,right:200,top:-200,bottom:200}} className="w-32 h-32 flex items-center justify-center
    rounded-lg bg-black text-white">
        <span className="text-white">
            Drag me!
        </span>
    </motion.div>
  )
}

export default DraggableBox