import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

const Credits = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h4 className="text-center mt-12">2023. All Rights Reserved.</h4>
        <h3 className="text-center mt-4">
          Made Possible by &nbsp;
          <a href="https://jsmastery.pro" target="_blank" className="underline">
            JavaScript Mastery
          </a>
        </h3>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Credits, "credits");
