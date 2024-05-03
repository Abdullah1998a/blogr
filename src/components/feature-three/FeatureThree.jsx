import { motion } from "framer-motion";
import { Feature } from "../feature";

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
export default function FeatureThree({ img, content }) {
  return (
    <section className="grid justify-center items-center my-44 py-16 relative overflow-x-clip">
      <motion.div
        variants={faddingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="md:absolute md:-left-[25%] lg:-left-[19%] xl:-left-[16%] md:top-1/2 md:-translate-y-1/2"
      >
        <picture>
          <source media="(min-width: 768px)" srcSet={img.desktop.src} />
          <img
            src={img.mobile.src}
            alt={img.mobile.alt}
            className="w-full md:max-w-xl lg:max-w-2xl xl:max-w-3xl"
          />
        </picture>
      </motion.div>
      <div className="container mx-auto px-4 lg:px-16">
        <motion.div
          variants={faddingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-11/12 mx-auto md:mr-0 md:w-3/5 lg:w-4/6 xl:w-1/2 flex flex-col items-center md:items-end gap-6"
        >
          {content.map(({ id, data }) => (
            <Feature content={data} key={id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
