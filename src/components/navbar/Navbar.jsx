import hamburger from "../../assets/images/icon-hamburger.svg";
import close from "../../assets/images/icon-close.svg";
import logo from "../../assets/images/logo.svg";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Links } from "../links";

const slideRightVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};
const slideLeftVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};
export default function Navbar() {
  const [reveal, setReveal] = useState(false);
  useEffect(() => {
    if (reveal) {
      document.body.classList.add("stop-scrolling");
    } else {
      document.body.classList.remove("stop-scrolling");
    }
  }, [reveal]);
  return (
    <nav className="py-8 md:py-6 flex justify-between items-center">
      <motion.a
        variants={slideRightVariants}
        initial="hidden"
        animate="visible"
        href="#"
      >
        <img src={logo} alt="logo" />
      </motion.a>
      <motion.button
        variants={slideLeftVariants}
        initial="hidden"
        animate="visible"
        className="flex justify-center items-center w-8 h-6 md:hidden"
        onClick={() => setReveal(!reveal)}
      >
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          key={reveal}
          src={reveal ? close : hamburger}
          alt={`${reveal ? "close" : "hamburger"} icon`}
        />
      </motion.button>
      <Links reveal={reveal} />
    </nav>
  );
}
