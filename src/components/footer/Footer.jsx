import logo from "../../assets/images/logo.svg";
import { FooterLinks } from "../footer-links";
import { Attribution } from "../attribution";
import { motion } from "framer-motion";

const faddingVariants = {
  hidden: { opacity: 0 },
  visible: {
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
const personalData = {
  name: "Abdullah Alnoime",
  website: "https://abdullah-alnoime.netlify.app",
};
export default function Footer() {
  return (
    <footer className="mt-24 md:mt-48 bg-[hsl(240,10%,16%)] py-16 rounded-tr-[6rem]">
      <motion.div
        variants={faddingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 lg:px-16 grid grid-cols-4 justify-center md:justify-between items-start gap-y-8 md:gap-y-6"
      >
        <motion.a
          variants={slideRightVariants}
          className="w-fit mx-auto col-span-4 md:mx-0 md:col-span-1"
          href="#"
        >
          <img src={logo} alt="logo" />
        </motion.a>
        <FooterLinks />
        <Attribution personal={personalData} />
      </motion.div>
    </footer>
  );
}
