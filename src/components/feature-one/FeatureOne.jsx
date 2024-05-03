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
const slideRightVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};
export default function FeatureOne({ title, img, content }) {
  return (
    <section className="grid items-center my-32 gap-y-4 md:gap-y-16 overflow-x-clip">
      <motion.h2
        variants={slideRightVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-2xl md:text-3xl text-center text-[hsl(208,49%,24%)] font-overpass_sb"
      >
        {title}
      </motion.h2>
      <div className="flex flex-col-reverse md:flex-row items-center relative py-16">
        <div className="container mx-auto px-4 lg:px-16">
          <motion.div
            variants={faddingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-11/12 mx-auto md:mx-0 md:w-3/5 lg:w-4/6 xl:w-1/2 flex flex-col items-center gap-6"
          >
            {content.map(({ id, data }) => (
              <Feature content={data} key={id} />
            ))}
          </motion.div>
        </div>
        <motion.div
          variants={faddingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:absolute top-1/2 md:-translate-y-1/2 -right-[23%] lg:-right-[17%] xl:-right-[14%]"
        >
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet={img.desktop.src}
              alt={img.desktop.alt}
            />
            <img
              src={img.mobile.src}
              alt={img.mobile.alt}
              className="md:max-w-lg lg:max-w-xl xl:max-w-2xl"
            />
          </picture>
        </motion.div>
      </div>
    </section>
  );
}
