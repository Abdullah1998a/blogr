import { motion } from "framer-motion";

const scaleVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      when: "beforeChildren",
    },
  },
};
const slideRightVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};
const slideLeftVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};
export default function Header() {
  return (
    <motion.header
      variants={scaleVariants}
      initial="hidden"
      animate="visible"
      className="h-[calc(100vh-120px)] flex flex-col justify-center items-center"
    >
      <h1 className="text-3xl md:text-4xl px-2 md:px-0 text-center lg:text-6xl text-white font-overpass_sb">
        A modern publishing platform
      </h1>
      <p className="text-white lg:text-xl font-overpass_l my-6 text-center">
        Grow your audience and build your online brand
      </p>
      <div className="flex gap-4">
        <motion.button
          variants={slideRightVariants}
          className="bg-neutral-50 px-4 md:px-6 py-2 rounded-full border-2 border-transparent text-[hsl(356,100%,66%)] hover:text-neutral-50 hover:bg-[hsl(355,100%,74%)] font-ubuntu_b duration-200 transition-colors"
        >
          Start for Free
        </motion.button>
        <motion.button
          variants={slideLeftVariants}
          className="px-4 md:px-6 py-2 rounded-full text-white border-2 border-white hover:bg-white hover:text-[hsl(356,100%,66%)] font-ubuntu_b duration-200 transition-colors"
        >
          Learn More
        </motion.button>
      </div>
    </motion.header>
  );
}
