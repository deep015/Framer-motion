import React ,{useState} from 'react'
import {motion } from "framer-motion"
import { menu } from 'framer-motion/client';

const menuVariants = {
    open:{x:0},
    closed:{x:"-100%"}
}
const SlidingMenu = () => {
    const [isOpen,setIsOpen] = useState(false);
  return (
    <div >
        <button className="px-8 py-4 bg-gray-500 text-white rounded-md shadow-lg"
        onClick={()=>setIsOpen(!isOpen)}>
            toggle menu
        </button>
        <motion.div 
        variants={menuVariants}
        initial='closed'
        animate={isOpen?'open':'closed'}
        transition={{duration:0.5}}
        className='fixed top-0 left-0 w-64 h-full bg-blue-600'>
            <ul className='p-4 text-white'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </motion.div>
    </div>)
}

export default SlidingMenu

