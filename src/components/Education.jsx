import React from "react";
import { motion } from "framer-motion";

import { cmu, cmuw, garland } from "../assets";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Alma Mater</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Education</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="relative mt-12 h-[626px] flex"
      >
        <motion.img src={cmu} className="absolute z-0 flex-1"></motion.img>
        <motion.div className="flex flex-1 z-10 h-auto relative">
          <div className="flex-1 flex flex-col content-center pl-8 pt-[82px]">
            <div>
              <img src={garland} className="h-[150px]"></img>
            </div>
            <p className={styles.sectionHeadText}>A Proud Tartan</p>
            <p className={styles.sectionSubText}>
              Master of Information Systems Management - Class of 2023
            </p>
            <br />
            <p className={styles.sectionSubText}>Awarded Highest Distinction</p>
          </div>
          <div className="flex-1 ml-10">
            <img src={cmuw} className="mt-12"></img>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Education, "education");
