import {motion} from "framer-motion"

import { useState } from "react"
const Reactange = () => {
         const [isSkewed,setSkewed] = useState(true)

  return (
   
    <motion.div className="bg-yellow-500 w-40 h-40"
    onClick={()=>setSkewed(!isSkewed)}
    animate={{skewX:isSkewed?20:0}}
    transition={{duration:1}} />
  )
}

export default Reactange