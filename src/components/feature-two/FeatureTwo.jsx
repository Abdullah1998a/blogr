import { motion } from "framer-motion";
import { Feature } from "../feature";
import "./feature-two.css";

const faddingVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};
export default function FeatureTwo({ img, content }) {
  return (
    <section className="feature-two">
      <motion.div
        variants={faddingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="absolute -translate-y-52 left-1/2 -translate-x-1/2 md:-translate-y-0 md:translate-x-0 md:left-0 lg:-left-8 xl:left-0"
      >
        <img
          src={img.both.src}
          alt={img.both.alt}
          className="max-w-sm sm:max-w-[26rem] md:max-w-md xl:max-w-xl"
        />
      </motion.div>
      <div className="container mx-auto px-4 lg:px-16">
        <motion.div
          variants={faddingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-11/12 mt-56 mx-auto md:mt-0 md:mr-0 md:w-[48%] lg:w-3/5 xl:w-1/2"
        >
          {content.map(({ id, data }) => (
            <Feature content={data} key={id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
