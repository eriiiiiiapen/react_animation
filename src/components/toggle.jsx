import { motion, useScroll } from "framer-motion";
import Page from './page.jsx';

function Toggle() {
  const { scrollYProgress } = useScroll();
  
  return (
<>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />

      <Page />

    </>
  )
}
export default Toggle;