import {
  motion,
  useMotionValue,
  useTransform,
  useAnimation,
} from "framer-motion";

function Moving() {
    const x = useMotionValue(0)
    const background = useTransform(
      x,
      [-100, 0, 100],
      ["#ff008c", "#7700ff", "rgb(230, 255, 0)"]
    )

    const controls = useAnimation()

  return (
    <>
    <div className="Moving">
      <div>
        {/* スタートボタン */}
          <button onClick={() => 
            controls.start({
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ["0%", "0%", "50%", "50%", "0%"],
              x: 1000,
            })}>
              Start
          </button>

        {/* 図形 */}
          <motion.div
        className="w-32 h-32 bg-blue-600"
        animate={controls}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1
        }}
      />

          {/* <motion.div style={{ background }}>
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              style={{ x }}
            >
              <motion.div className="w-[100px] h-[100px] bg-yellow-200 relative" />
            </motion.div>
          </motion.div> */}
        </div>
    </div>
    </>
  );
}

export default Moving;