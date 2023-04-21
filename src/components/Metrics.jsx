import { SectionWrapper } from "../hoc";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { metrics } from "../constants";

const Metric = ({ metric, index }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="px-12 border-r-2 border-white last:border-0"
    >
      <p className="text-4xl text-center">
        <CountUp
          startOnMount={false}
          end={metric.number}
          delay={1}
          duration={metric.number < 50 ? 1 : 2}
        />
        {metric.spChar || ""}
      </p>
      <p className="text-xl">{metric.measure}</p>
    </motion.div>
  );
};

const Metrics = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Impact</p>
        <h2 className={styles.sectionHeadText}>Background.</h2>
      </motion.div>

      <div className="flex mx-8 justify-center mt-20">
        {metrics.map((metric, index) => (
          <Metric key={`metric-${index}`} metric={metric} index />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Metrics, "metrics");
