import { subLinksData } from "../../data/sublinksData";
import { SubLinks } from "../sub-links";
import { motion } from "framer-motion";
import { Account } from "../account";
import { useState } from "react";
import "./links.css";

const faddingVariants = {
  hidden: { opacity: 0, width: 0 },
  visible: {
    opacity: 1,
    width: "calc(100% - 2rem)",
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};
const slideRightVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};
export default function Links({ reveal }) {
  const [collapse, setCollapse] = useState(null);
  const handleCollapse = (id) => {
    if (collapse === id) {
      return setCollapse(null);
    }
    setCollapse(id);
  };
  return (
    <motion.ul
      key={reveal}
      variants={faddingVariants}
      initial="hidden"
      animate="visible"
      className={`menu-links ${reveal ? "active" : null}`}
    >
      {subLinksData.map(({ id, name, data }) => (
        <motion.li
          variants={slideRightVariants}
          className="w-3/4 md:w-fit md:relative"
          key={id}
        >
          <button
            className="flex gap-2 mx-auto items-center capitalize text-[hsl(208,49%,24%)] md:text-white md:opacity-75 hover:text-[#4b5862] md:hover:underline md:hover:underline-offset-2 md:hover:text-white md:hover:opacity-100 font-overpass_sb"
            onClick={() => handleCollapse(id)}
          >
            <span className="capitalize">{name}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="7"
              className={`-translate-y-0.5 stroke-[#FF7B86] md:stroke-white duration-200 transition-transform ${
                collapse === id ? "rotate-180" : "rotate-0"
              }`}
            >
              <path fill="none" strokeWidth="2" d="M1 1l4 4 4-4" />
            </svg>
          </button>
          <SubLinks links={data} show={collapse === id} footer={false} />
        </motion.li>
      ))}
      <hr className="w-3/4 border-[1px] border-neutral-200 md:hidden" />
      <Account />
    </motion.ul>
  );
}
