import {motion} from 'framer-motion'
const ComplexAnimation = () => {
  return (
     <motion.div 
     className='bg-purple-300 w-30 h-30'
     animate={{x:200,rotate:360,scale:2}}
     transition={{duration:2}}/>
  )
}

export default ComplexAnimation