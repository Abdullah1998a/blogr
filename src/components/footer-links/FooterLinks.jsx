import { subLinksData } from "../../data/sublinksData";
import { SubLinks } from "../sub-links";
import { motion } from "framer-motion";

const slideLeftVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};
export default function FooterLinks() {
  return subLinksData.map(({ id, name, data }) => (
    <motion.ul
      variants={slideLeftVariants}
      key={id}
      className="col-span-4 md:col-span-1 text-center md:text-left"
    >
      <li className="relative">
        <h4 className="text-base capitalize mb-4 font-overpass_sb text-white">
          {name}
        </h4>
        <SubLinks links={data} show={true} footer={true} />
      </li>
    </motion.ul>
  ));
}
