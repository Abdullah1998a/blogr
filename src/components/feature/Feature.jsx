import { motion } from "framer-motion";

const slideRightVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};
export default function Feature({ content }) {
  const { title, description } = content;
  return (
    <motion.section
      variants={slideRightVariants}
      className="my-4 md:my-0 text-center md:text-left"
    >
      <h3 className="text-xl md:text-2xl text-[hsl(208,49%,24%)] font-overpass_sb">
        {title}
      </h3>
      <p className="my-4 font-overpass_l text-neutral-500 text-balance">
        {description}
      </p>
    </motion.section>
  );
}
