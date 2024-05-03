import { motion } from "framer-motion";
import "./sub-links.css";

const slideRightVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};
export default function SubLinks({ links, show, footer }) {
  return (
    <motion.ul
      initial={{ height: 0, opacity: 0, display: "none" }}
      animate={show && { height: "auto", opacity: 1, display: "flex" }}
      key={show}
      className={
        !footer
          ? "sublink-menu"
          : "flex flex-col gap-2 text-neutral-300 font-ubuntu_r"
      }
    >
      {links.map((link) => (
        <motion.li variants={footer && slideRightVariants} key={link.toLowerCase()}>
          <a
            className={footer ? "hover:underline" : "hover:text-neutral-900"}
            href="#"
          >
            {link}
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
}
