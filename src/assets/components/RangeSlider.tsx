import {motion, useMotionValue,useSpring} from 'framer-motion'

import type { ChangeEvent } from 'react';
const RangeSlider = () => {

    const scale = useMotionValue(1);

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        scale.set(parseFloat(e.target.value))
    }
  return (
   
         <div>
             <motion.div className='box' style={{scale}}  />
            <input type='range' min={0.5} max={5} step={0.01}
            defaultValue={1} onChange={changeHandler}  />
         </div>
  )
}

export default RangeSlider