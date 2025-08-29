import { motion } from "framer-motion"
const StaggerAnimation = () => {
    const parentVarients = {
        hidden :{
            opacity:0
        },
        visible :{
            opacity:1,
            transition :{
                staggerChildren:0.8,
            }
            }
    }

    const childVariants ={
        hidden :{
            opacity:0,
            y:20
        },
        visible :{
            opacity:1,
            y:0
        }
    }
  return (
    <div>
        <motion.div variants={parentVarients}
            initial='hidden'
            animate='visible'>
        {[...Array(5)].map((_, index) => (
            <motion.div
            key={index}
            className="box mt-[2rem]  "
            variants={childVariants}
          />
         
        ))}
         </motion.div>
    </div>
  )
}

export default StaggerAnimation