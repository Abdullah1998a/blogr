import { motion } from "framer-motion";
import "./account.css";

const slideLeftVariants = {
  hidden: { x: 80, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};
export default function Account() {
  return (
    <motion.li
      variants={slideLeftVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row gap-3 md:ml-auto md:gap-4"
    >
      <button className="text-[hsl(208,49%,24%)] hover:opacity-90 md:text-neutral-50 md:opacity-75 md:hover:opacity-100 font-ubuntu_b">
        Login
      </button>
      <button className="signup-btn">Sign Up</button>
    </motion.li>
  );
}
