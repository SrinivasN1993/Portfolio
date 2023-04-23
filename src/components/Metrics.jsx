import { SectionWrapper } from "../hoc";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { metrics } from "../constants";

const Metric = ({ metric, index }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.5)}
      className="pr-10 border-0 sm:border-r-2 sm:border-white last:border-0"
    >
      <p className="text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-green-600 font-medium">
        <CountUp
          startOnMount={false}
          end={metric.number}
          delay={1}
          duration={metric.number < 50 ? 1 : 2}
        />
        {metric.spChar || ""}
      </p>
      <p className="text-xl text-center">{metric.measure}</p>
    </motion.div>
  );
};

const Metrics = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Results</p>
        <h2 className={styles.sectionHeadText}>Impact.</h2>
      </motion.div>

      <div className="flex flex-wrap mx-8 justify-center mt-20 gap-10">
        {metrics.map((metric, index) => (
          <Metric key={`metric-${index}`} metric={metric} index />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Metrics, "metrics");
