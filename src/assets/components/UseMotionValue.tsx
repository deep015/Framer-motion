import {motion, useMotionValue, useMotionValueEvent} from 'framer-motion'

const UseMotionValue = () => {
    const x = useMotionValue(100);
    useMotionValueEvent(x,"animationStart",()=>{
        console.log("animation start")
    })

    useMotionValueEvent(x,"change",(latest)=>{
        console.log("x changed to",latest)
    })
  return (
   <motion.div className='box' drag
    dragConstraints={{left:0,right:200}} style={{x}}/>
  )
}

export default UseMotionValue