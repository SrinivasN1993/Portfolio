import React from "react";
import { motion } from "framer-motion";

import { cmu, cmuw, garland } from "../assets";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="hidden sm:block">
        <p className={`${styles.sectionSubText} text-center`}>Alma Mater</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Education</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="hidden sm:mt-12 sm:flex bg-tartan h-[70vh]"
      >
        <motion.div className="flex items-center justify-center bg-[rgba(0,0,0,0.3)] px-12 py-6">
          <div className="flex flex-[3] flex-col content-center pr-10">
            <div>
              <img
                src={garland}
                className="h-[50px] sm:h-[100px] md:h-[150px]"
              ></img>
            </div>
            <p className={styles.sectionHeadText}>A Proud Tartan</p>
            <p className={styles.sectionSubText}>
              Master of Information Systems Management
            </p>
            <p className={styles.sectionSubText}>Class of 2023</p>
            <br />
            <p className={styles.sectionSubText}>Awarded Highest Distinction</p>
          </div>
          <div className="flex flex-[2] items-center justify-items-center">
            <img src={cmuw}></img>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Education, "education");
