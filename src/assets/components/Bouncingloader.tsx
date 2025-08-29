import { motion } from "framer-motion";

const BouncingLoader = () => {
  return (
    <div className="flex justify-center items-center gap-4">
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className="w-4 h-4 bg-teal-300 rounded-full"
          animate={{y:[0,-15,0]}}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatDelay:index*0.2
          }}
        />
      ))}
    </div>
  );
};

export default BouncingLoader;
