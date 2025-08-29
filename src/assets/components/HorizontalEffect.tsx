import { motion } from "framer-motion";

const HorizontalEffect = () => {
  return (
    <div className="w-40 overflow-hidden border p-2"> {/* fixed width + hidden overflow */}
      <motion.div
        className="whitespace-nowrap"
        whileHover={{ x: "-50%" }} // shift left to show hidden text
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        This is a long piece of text that scrolls on hover
      </motion.div>
    </div>
  );
};

export default HorizontalEffect;
