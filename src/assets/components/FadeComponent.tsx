import {motion} from "framer-motion"
import { useState } from "react";
const FadeComponent = () => {
    const [visible,setVisible] = useState(false);
  return (
    <div className="flex flex-col items-center">
        <button className="bg-blue-500  text-white font-bold py-2 px-4 rounded"
        onClick={()=>setVisible(!visible)}>
            Toggle Fade
        </button>
        {visible && (
            <motion.div 
            className="p-4 bg-gray-200 text-black rounded-xl"
            initial={{opacity:0}} animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{duration:0.5}}>
                    Hello,I'm a fading component
                </motion.div>
        )}
    </div>
  )
}

export default FadeComponent