import { motion, useScroll } from "framer-motion";
import Page from './page.jsx';
import Fall from './fall.jsx';

function Toggle() {
  const { scrollYProgress } = useScroll();
  
  return (
    <>
      <Fall />

      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />

      <Page />

    </>
  )
}
export default Toggle;