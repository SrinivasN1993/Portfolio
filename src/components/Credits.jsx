import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { logo } from "../assets";

const Credits = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h4 className="text-center mt-12 flex justify-center items-center">
          <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
          &nbsp;2023. All Rights Reserved.
        </h4>
        <h3 className="text-center mt-1">
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
